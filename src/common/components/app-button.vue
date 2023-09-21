<template>
    <button :class="'button button--' + type">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

type ButtonType = "primary" | "secondary";

defineProps({
    type: {
        type: String as PropType<ButtonType>,
        required: false,
        default: "primary"
    }
})
</script>

<style lang="scss" scoped>
@import '../../assets/scss/abstracts/colors';
@import '../../assets/scss/abstracts/constants';

.button {
    padding: $size-smaller $size-base;
    font-size: $size-small;
    line-height: $size-base;
    font-weight: $font-weight-base;
    border-radius: $size-tiny;
    cursor: pointer;

    &--primary {
        background-color: $color-primary;
        color: $color-white;
    }

    &--secondary {
        background-color: $color-secondary-lighter;
        color: $color-dark-black;
    }
}
</style>