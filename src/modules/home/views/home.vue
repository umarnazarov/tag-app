<template>
    <main class="main-container">
        <AppButton :type="'primary'" @click="isModalOpen = true">
            Открыть модальное окно
        </AppButton>
        <div class="modal-container">
            <Modal v-model:show="isModalOpen">
                <ModalHeader />
                <div class="modal-content">
                    <div class="modal-content__input">
                        <AppInput v-model:model-value="state.searchTerm" />
                    </div>
                    <TagSearchResult />
                    <TagModalInfo />
                    <TagSelected />
                </div>
                <TagModalFooter @update:show-modal="handleCloseModal" @update:close-modal="handleSaveModal" />
            </Modal>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Modal from '@/common/components/modal/modal.vue';
import AppInput from '@/common/components/app-input.vue';
import ModalHeader from "../components/tag-modal-header.vue"
import AppButton from '@/common/components/app-button.vue';
import TagModalInfo from '../components/tag-modal-info.vue';
import TagSearchResult from '../components/tag-search-result.vue';
import TagSelected from '../components/tag-selected.vue';
import TagModalFooter from '../components/tag-modal-footer.vue';
import { useTagsStore } from '../store/tags-store'

const { state } = useTagsStore()

const isModalOpen = ref(true)

const handleCloseModal = () => {
    isModalOpen.value = false
    state.searchTerm = ''
    state.selectedTags = []
    state.searchResult = []
}

const handleSaveModal = () => {
    isModalOpen.value = false
    state.searchTerm = ''
    state.searchResult = []

}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/abstracts/_mixins.scss';
@import '../../../assets/scss/abstracts/constants';

.main-container {
    height: 100vh;
    @include center-child-div();

    .modal-content {
        &__input {
            width: $width-small;
            padding: $size-medium-lg 0 $size-lg-xl $size-lg-xl;
        }
    }
}
</style>