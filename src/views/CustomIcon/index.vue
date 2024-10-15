<template>
  <PageLayout background="#F6F7F9">
    <template #navigationBarCenter>
      <div class="text-16 font-500">自定义图标</div>
    </template>
    <template #navigationBarTrailing>
      <div class="text-#B3B3B3 text-14 font-500">安装</div>
    </template>

    <div class="bg-#F6F7F9 w-100vw px-20 mt-20 mb-23">
      <!-- 上方自定义图标 -->
      <div class="bg-#FFF rounded-16 flex flex-col justify-center items-center">
        <div class="flex flex-col">
          <ToggleImg></ToggleImg>
          <ToggleImg></ToggleImg>
          <ToggleImg></ToggleImg>
        </div>
      </div>

      <div class="flex items-center justify-center mt-19 mb-13">
        <Icon
          icon="ic:round-add-circle"
          width="30px"
          height="30px"
          color="#0A7AFF"
        />
      </div>

      <!-- 广告 -->
      <div class="bg-#FFF rounded-16 px-16 pt-16 pb-20">
        <img
          src="/customIcon/advertisementImg.webp"
          alt=""
          class="w-full h-full rounded-14"
        />

        <div class="text-14 mt-28">
          <div class="font-500">使用步骤</div>
          <div class="text-#8A8A8A mt-10">1.选择原图标->选择新图标</div>
          <div class="text-#8A8A8A mt-8">2.点击右上角“安装”，即可安装成功</div>
        </div>

        <div class="text-14 mt-22">
          <div class="font-500">注意：</div>
          <div class="text-#8A8A8A mt-4">
            支持批量更换，支持修改APP名称，在桌面创建快捷方式，作为APP快捷打开入口，对原APP不会产生影响，不会更改原APP图标，切记不可卸载原APP
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import ToggleImg from './components/ToggleImg.vue';
import { Icon } from '@iconify/vue';
</script>
<style scoped lang="scss"></style>
