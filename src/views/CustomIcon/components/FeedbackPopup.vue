<template>
  <!-- 遮罩层 -->
  <transition
    enter-active-class="transition-opacity duration-300 ease-in-out"
    leave-active-class="transition-opacity duration-300 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.visible"
      @click="closePopup"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black/20"
    ></div>
  </transition>

  <transition
    enter-active-class="transition-opacity duration-300 ease-in-out"
    leave-active-class="transition-opacity duration-300 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.visible"
      class="w-100vw fixed flex items-center justify-center flex-col left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[calc(50%-20px)] px-16"
    >
      <div class="w-full bg-#FFF rounded-12 px-16 text-#0F0F0F font-400">
        <div class="my-10">内容无法正常展示(卡顿、黑白屏)</div>
        <div class="w-full h-1 bg-black/5"></div>
        <div class="my-10">不感兴趣</div>
        <div class="w-full h-1 bg-black/5"></div>
        <div class="my-10">无法关闭</div>
        <div class="w-full h-1 bg-black/5"></div>
        <div class="mb-10">
          <div class="my-10">举报广告</div>
          <div class="flex flex-wrap gap-10 text-black/60">
            <div class="px-8 py-4 bg-black/5 rounded-6">违法违规</div>
            <div class="px-8 py-4 bg-black/5 rounded-6">虚假宣传</div>
            <div class="px-8 py-4 bg-black/5 rounded-6">低俗色情</div>
            <div class="px-8 py-4 bg-black/5 rounded-6">疑似抄袭</div>
            <div class="px-8 py-4 bg-black/5 rounded-6">诱导点击</div>
          </div>
        </div>
        <div class="w-full h-1 bg-black/5"></div>
        <div class="my-10">素材反馈</div>
        <div class="w-full h-1 bg-black/5"></div>
        <van-field
          v-model="inputValue"
          left-icon="edit"
          placeholder="其他建议"
          class="b-1 b-solid b-black/5 my-10 rounded-6"
        />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: false,
  },
});
const emit = defineEmits(['visibleChange']);

const inputValue = ref('');

const closePopup = () => {
  emit('visibleChange', false);
};
</script>

<style scoped lang="scss"></style>
