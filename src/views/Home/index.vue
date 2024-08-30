<template>
  <PageLayout enable-back-to-top hide-navigation-bar hideBack>
    <template #navigationBarLeading>
      <div
        class="flex justify-center items-center w-120 h-32 bg-#0A7AFF/6% rounded-19"
      >
        <img src="/home/customIcon.webp" class="w-24 h-24 rounded-50%" />
        <div class="ml-4 text-12 text-#0A7AFF font-500">自定义图标</div>
        <Icon
          icon="weui:arrow-filled"
          width="16px"
          height="16px"
          color="#0A7AFF"
        />
      </div>
    </template>
    <template #navigationBarTrailing>
      <div class="flex justify-center items-center gap-12 w-100 h-32">
        <div
          class="flex items-center justify-center gap-2 w-60 h-26 bg-orange/8% rounded-16"
        >
          <img src="/home/contribute.webp" class="w-20 h-20" />
          <div class="text-#FF9500 text-13 font-600">投稿</div>
        </div>

        <Icon icon="ph:question" width="28px" height="28px" color="#7A7A7A" />
      </div>
    </template>
    <div class="mt-12 px-16 w-full h-full">
      <div
        class="overflow-x-scroll scrollbar-hidden w-full whitespace-nowrap flex gap-24 items-center justify-start"
      >
        <div v-for="item in wallpaperTypeList" :key="item" class="text-14">
          {{ item }}
        </div>
      </div>
    </div>
  </PageLayout>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import PageLayout from '@/components/PageLayout.vue';
import { wallpaperTypeList } from './date';
</script>
<style scoped lang="scss"></style>
