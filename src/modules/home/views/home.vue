<template>
    <div>
        <Modal v-model:show="isModalOpen">
            Hi
        </Modal>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import Modal from '@/common/components/modal/modal.vue'

const isModalOpen = ref(true)

</script>

<style lang="scss" scoped></style>