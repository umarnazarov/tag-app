<template>
    <footer class="modal-content__footer">
        <AppButton @click="saveModal" :type="'primary'">
            Сохранить
        </AppButton>
        <AppButton :type="'secondary'" @click="closeModal">
            Отмена
        </AppButton>
    </footer>
</template>

<script lang="ts" setup>
import AppButton from '@/common/components/app-button.vue';

const emit = defineEmits(['update:show-modal', 'update:close-modal'])

const closeModal = () => {
    emit('update:show-modal')
}

const saveModal = () => {
    emit('update:close-modal')
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/abstracts/colors';
@import '../../../assets/scss/abstracts/constants';

.modal-content__footer {
    display: flex;
    gap: $size-medium;
    padding: $size-medium-lg $size-lg-xl;
    border-top: $size-tiny-xxl solid $color-secondary-lighter;
}
</style>