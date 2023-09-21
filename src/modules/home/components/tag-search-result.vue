<template>
    <div v-if="state.searchResult.length" class="modal-content__tags">
        <TagBox @click="handleAddTag(tag)" v-for="tag in state.searchResult" :key="tag">
            <template v-slot:title>
                <span class="modal-content__tags__text">
                    {{ tag }}
                </span>
            </template>
        </TagBox>
    </div>
</template>

<script lang="ts" setup>
import TagBox from '@/common/components/tag-box.vue'
import { useTagsStore } from '../store/tags-store'

const { state, handleAddTag } = useTagsStore()
</script>

<style lang="scss" scoped>
@use "../tag-info.scss";
</style>