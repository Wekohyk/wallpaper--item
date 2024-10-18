<template>
  <transition
    enter-active-class="transition-opacity duration-300 ease-in-out"
    leave-active-class="transition-opacity duration-500 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.visible"
      @click="closePopup"
      class="fixed top-0 left-0 z-99999 right-0 bottom-0 bg-black/20"
    ></div>
  </transition>

  <transition
    enter-active-class="transition-all duration-300 ease-in-out"
    leave-active-class="transition-all duration-300 ease-in-out"
    enter-from-class="translate-y-1000"
    enter-to-class="translate-y-0"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-1000"
  >
    <div
      v-if="props.visible"
      class="w-100vw h-404 fixed z-99999 flex items-center justify-center flex-col left-0 bottom-0 transform"
    >
      <div class="w-full h-full bg-#fff px28 py34">
        <div class="w-full h-68">
          <div>发布者</div>
          <div>
            <img src="" alt="" />
            <div>懒洋洋</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Wallpaper } from '@/type/home';

interface Props {
  visible: boolean;
  itemList: Wallpaper;
}

const props = defineProps<Props>();

const emit = defineEmits(['visibleChange']);

const closePopup = () => {
  emit('visibleChange', false);
};
</script>

<style scoped lang="scss"></style>
