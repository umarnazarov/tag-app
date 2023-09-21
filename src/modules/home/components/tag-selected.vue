<template>
    <div v-if="state.selectedTags.length" class="modal-content__tags modal-content__tags--selected">
        <TagBox v-for="tag in state.selectedTags" :key="tag">
            <template v-slot:title>
                <span class="modal-content__tags__text">
                    {{ tag }}
                </span>
            </template>
            <template v-slot:icon>
                <svg @click="handleRemove(tag)" class="modal-content__tags__icon" width="20" height="20" viewBox="0 0 20 20"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5L15 15M5 15L15 5" stroke="#16171B" stroke-linecap="round" />
                </svg>
            </template>
        </TagBox>
    </div>
</template>

<script lang="ts" setup>
import TagBox from '@/common/components/tag-box.vue'
import { useTagsStore } from '../store/tags-store'

const { state, handleRemove } = useTagsStore()
</script>

<style lang="scss" scoped>
@import "../tag-info.scss";
</style>