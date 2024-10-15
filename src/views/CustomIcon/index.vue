<template>
  <PageLayout background="#F6F7F9">
    <template #navigationBarCenter>
      <div class="text-16 font-500">自定义图标</div>
    </template>
    <template #navigationBarTrailing>
      <div class="text-#B3B3B3 text-14 font-500">安装</div>
    </template>

    <div class="bg-#F6F7F9 w-full px-20 mt-20 mb-23">
      <!-- 上方自定义图标 -->
      <div
        class="bg-#FFF rounded-16 flex flex-col justify-center items-center overflow-hidden"
      >
        <van-cell
          v-for="(item, index) in toggleImgList"
          :key="index"
          class="my-grid-item"
        >
          <template #title>
            <van-swipe-cell :before-close="beforeClose" class="w-full pl-10">
              <ToggleImg></ToggleImg>
              <template #right>
                <div
                  class="flex justify-center items-center w-74 h-full bg-#FF3B30 text-center text-#fff text-14"
                >
                  删除
                </div>
              </template>
            </van-swipe-cell>
          </template>
        </van-cell>
      </div>

      <div
        class="flex items-center justify-center mt-19 mb-13"
        @click="addToggleImg"
      >
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
import { ref } from 'vue';

const toggleImgList = ref<number[]>([0, 1, 2]);

const addToggleImg = () => {
  console.log(toggleImgList.value);
  toggleImgList.value.push(toggleImgList.value.length);
};

const beforeClose = () => {
  console.log('delete');
};
</script>
<style scoped lang="scss">
.my-grid-item {
  padding: 0px;
}
</style>
