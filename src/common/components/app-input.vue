<template>
    <div class="input-container">
        <input class="input-container__input" :value="modelValue" placeholder=" " @input="updateInput" />
        <label class="input-container__label">Название тега</label>
    </div>
</template>

<script setup lang="ts">
defineProps({
    modelValue: {
        type: [String, Number],
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const updateInput = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/abstracts/colors';
@import '../../assets/scss/abstracts/constants';

.input-container {
    position: relative;

    &__input {
        padding: $size-small $size-base-larger;
        border-radius: $size-tinier;
        border: solid $size-tiny-xl $color-secondary-lighter;
        font-size: $size-small;
        display: block;
        width: 100%;
        background-color: $color-white;
        color: $color-dark-black;

        &:focus {
            outline: none;
            border: solid $size-tiny-xl $color-primary;
        }

        &:not(:placeholder-shown)~.input-container__label,
        &:focus~.input-container__label {
            top: -$size-tiny;
            font-size: $size-smaller;
            line-height: $size-base;
            font-weight: $font-weight-bolder;
            color: $color-primary;
        }

        &:not(:placeholder-shown) {
            border: solid $size-tiny-xl $color-primary;
        }
    }

    &__label {
        color: $color-dark-black;
        background: $color-white;
        font-size: $size-small;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: $size-base;
        top: $size-base;
        padding: 0 $size-tinier;
        transition: top 0.2s ease;
        -moz-transition: top 0.2s ease;
        -webkit-transition: top 0.2s ease;
    }
}
</style>