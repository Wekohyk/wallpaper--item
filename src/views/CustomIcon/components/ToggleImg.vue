<template>
  <div class="flex items-center gap-56 py-14 pl-16">
    <div class="text-center">
      <div
        class="flex justify-center items-center w-72 h-72 bg-#F6F7F9 rounded-18"
        @click="chooseOldIcon"
      >
        <Icon icon="material-symbols:add-2" width="26px" height="26px" />
      </div>
      <div class="text-#8A8A8A text-14 mt-10">原图标</div>
    </div>

    <Icon
      icon="gg:arrow-long-right"
      width="24px"
      height="24px"
      class="-translate-y-15"
    />

    <div class="text-center">
      <div
        class="flex justify-center items-center w-72 h-72 bg-#F6F7F9 rounded-18"
        @click="chooseNewIcon"
      >
        <Icon icon="material-symbols:add-2" width="26px" height="26px" />
      </div>
      <div class="text-#8A8A8A text-14 mt-10">新图标</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';

const emit = defineEmits(['chooseOldIcon', 'chooseNewIcon']);

const chooseOldIcon = () => {
  emit('chooseOldIcon');
};

const chooseNewIcon = () => {
  emit('chooseNewIcon');
};
</script>
<style scoped lang="scss"></style>
