<template>
    <div class="modal-content__info" v-if="!state.loadingSearch && !state.searchResult.length && state.searchTerm">
        <span>По запросу ничего не найдено</span>
    </div>
    <div class="modal-content__info" v-if="state.loadingSearch">
        <span>Загрузка...</span>
    </div>
</template>

<script lang="ts" setup>
import { useTagsStore } from '../store/tags-store'
const { state } = useTagsStore()
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/abstracts/constants';

.modal-content__info {
    padding: 0 $size-lg-xl $size-medium-lg;
    font-size: $size-small;
    line-height: $size-medium;
    font-weight: $font-weight-bold;
}
</style>