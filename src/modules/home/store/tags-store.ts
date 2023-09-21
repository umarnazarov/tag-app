import { onMounted, watch, reactive } from "vue";
import { defineStore } from "pinia";

import { getData } from "@/data/data";
import { populateNestedObj } from "@/helpers/populateNestedObj";
import { debounce } from "@/helpers/debounce";
import { IState } from "../types";

export const useTagsStore = defineStore(
  "tags",
  () => {
    const state = reactive<IState>({
      loadingSearch: false,
      searchTerm: "",
      data: [],
      searchResult: [],
      selectedTags: [],
    });

    const maxSelectCount = 5;

    onMounted(() => {
      fetchData();
    });

    const fetchData = async () => {
      const data: any = await getData();
      const tags = data.map((item) =>
        item.categories.map((s) =>
          s.subcategories.map((s) => s.tags.map((t) => t)[0])
        )
      );
      state.data = populateNestedObj(tags) as any;
    };

    const handleTagSearch = (term: string) => {
      if (!term) {
        return;
      }

      state.data.filter((t) => {
        if (
          t.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) ||
          t.aliases.some((a) =>
            a.toLocaleLowerCase().includes(term.toLocaleLowerCase())
          )
        ) {
          if (state.searchResult.indexOf(t.name) === -1) {
            state.searchResult = [...state.searchResult, t.name];
          }
        }
      });
    };

    const handleAddTag = (tag: string) => {
      if (
        state.selectedTags.indexOf(tag) === -1 &&
        state.selectedTags.length !== maxSelectCount
      ) {
        state.selectedTags.push(tag);
      }
    };

    const handleRemove = (tag: string) => {
      state.selectedTags = state.selectedTags.filter((s) => s !== tag);
    };

    const debouncedSearch = debounce(() => {
      handleTagSearch(state.searchTerm);
    }, 500);

    watch(
      () => state.searchTerm,
      async () => {
        state.loadingSearch = true;
        state.searchResult = [];

        debouncedSearch().then(() => {
          state.loadingSearch = false;
        }),
          {
            deep: true,
            immediate: true,
          };
      }
    );

    return { state, handleAddTag, handleRemove, maxSelectCount };
  },
  {
    persist: true,
  }
);
