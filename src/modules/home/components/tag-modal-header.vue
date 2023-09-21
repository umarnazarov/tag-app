<template>
    <header class="tag-modal-header">
        <h4 class="tag-modal-header__title">Добавление тегов</h4>
        <p class="tag-modal-header__description">Вы можете добавить ещё <b>{{ leftAddCount }}</b>
        </p>
    </header>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useTagsStore } from '../store/tags-store';
const { maxSelectCount, state } = useTagsStore();

const leftAddCount = computed(() => maxSelectCount - state.selectedTags.length)
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/abstracts/colors';
@import '../../../assets/scss/abstracts/constants';

.tag-modal-header {
    padding: $size-lg-xl $size-lg-xl $size-medium $size-lg-xl;
    border-bottom: $size-tiny-xxl solid $color-secondary-lighter;

    &__title {
        font-size: 1rem;
        font-weight: $font-weight-bolder;
        line-height: $size-medium;
        margin-bottom: $size-smaller;
    }

    &__description {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: $size-medium;
    }
}
</style>