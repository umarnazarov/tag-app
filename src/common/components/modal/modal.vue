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
@use "../../../assets/scss/abstracts/mixins" as *;

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--clr-secondary-600);
    @include center-child-div();

    &__content {
        width: 540px;
        background-color: var(--clr-secondary-100);
        border: 1px solid var(--clr-primary-400);
        padding: 40px;
        border-radius: 8px;
    }

}
</style>