import { defineStore } from "pinia";

export const useTagsStore = defineStore(
  "tags",
  () => {
    return {};
  },
  {
    persist: true,
  }
);
