<template>
  <div
    class="flex flex-col items-center justify-center w-100vw h-100vh"
    v-if="!props.visible"
  >
    <div class="flex flex-col items-center" v-if="!loading">
      <img
        src="/home/dataAcquisitionFailureImg.webp"
        alt=""
        class="w-171 h-120"
      />
      <div class="text-14 text-#8A8A8A mt-16">
        糟糕，资源获取失败，请重新尝试
      </div>
      <div
        class="text-14 font-500 text-#0A7AFF bg-#0A7AFF/5 w-130 h-32 lh-32 text-center rounded-22 mt-28"
        @click="getData"
      >
        重新尝试
      </div>
    </div>

    <van-loading type="spinner" size="24px" vertical v-else>
      加载中...
    </van-loading>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['isShowAcquisition']);

const loading = ref(false);

const getData = () => {
  loading.value = true;
  setTimeout(() => {
    emit('isShowAcquisition', true);
  }, 2000);
};
</script>

<style scoped lang="scss"></style>
