<template>
    <div @click="hideDialog" v-if="show" class="modal-container">
        <div class="modal-container__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    show: {
        default: true,
        type: Boolean
    }
})

const emit = defineEmits(['update:show'])

const hideDialog = () => {
    emit('update:show', false)
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/abstracts/mixins";
@import '../../../assets/scss/abstracts/colors';
@import '../../../assets/scss/abstracts/constants';

$full-percent: 100%;

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    height: $full-percent;
    width: $full-percent;
    background-color: $color-secondary-light;
    @include center-child-div();

    &__content {
        width: $width-base;
        background-color: $color-white;
        border-radius: $size-tiny;
    }

}
</style>