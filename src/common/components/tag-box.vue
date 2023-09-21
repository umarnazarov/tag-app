<template>
    <div class="tag-box">
        <slot name="title"></slot>
        <slot name="icon"></slot>
    </div>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import '../../assets/scss/abstracts/colors';
@import '../../assets/scss/abstracts/constants';

.tag-box {
    display: flex;
    align-items: center;
    padding: $size-tiny $size-smaller;
    background-color: $color-secondary-lighter;
    width: fit-content;
    border-radius: $size-tinier;
}
</style>