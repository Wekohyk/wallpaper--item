<template>
  <div class="fixed top-0 z-999 w-full">
    <div class="flex justify-between pt-43 pl-16 pr-12 bg-#FFF w-full">
      <div
        class="flex justify-center items-center w-120 h-32 bg-#0A7AFF/6% rounded-19"
        @click="linkCustomIcon"
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
      <div class="flex justify-center items-center gap-12 w-100 h-32">
        <div
          class="flex items-center justify-center gap-2 w-60 h-26 bg-orange/8% rounded-10"
        >
          <img src="/home/contribute.webp" class="w-20 h-20" />
          <div class="text-#FF9500 text-13 font-600">投稿</div>
        </div>

        <Icon icon="ph:question" width="28px" height="28px" color="#7A7A7A" />
      </div>
    </div>

    <!-- tab栏 -->
    <van-tabs
      v-model:active="tabId"
      title-active-color="#0A7AFF"
      lazy-render
      line-width="20"
    >
      <van-tab
        v-for="(item, index) in wallpaperTypeList"
        :key="item.id"
        :title="item.name"
        class="flex flex-col items-center gap-2 rounded"
        @click="moveCenter($event, index)"
      ></van-tab>
    </van-tabs>
  </div>

  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <!-- 主题示例 -->
    <div class="w-100vw px-16 mt-134 flex justify-between" v-if="isGetData">
      <div class="flex flex-col items-center gap-12 w-49% rounded-10">
        <img src="/home/example.webp" alt="" class="w-full h-230" />
        <div
          class="w-full rounded-10"
          v-for="item in leftWallpaperList"
          :key="item.id"
          @click="selectExample(item)"
        >
          <ThemeExample
            v-if="item.showPosition === 'left'"
            :itemList="item"
          ></ThemeExample>
        </div>
      </div>
      <div class="flex flex-col items-center gap-12 w-49% rounded-10">
        <div
          class="w-full rounded-10"
          v-for="item in rightWallpaperList"
          :key="item.id"
          @click="selectExample(item)"
        >
          <ThemeExample
            v-if="item.showPosition === 'right'"
            :itemList="item"
          ></ThemeExample>
        </div>
      </div>
    </div>

    <DataAcquisitionFailure
      v-else
      @isShowAcquisition="isShowAcquisition"
    ></DataAcquisitionFailure>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ThemeExample from './components/ThemeExample.vue';
import DataAcquisitionFailure from '@/components/DataAcquisitionFailure.vue';
import { wallpaperTypeList, wallpaperList } from './date';
import { ref } from 'vue';
import router from '@/router';

const tabId = ref(0);
const scrollRef = ref<HTMLDivElement | null>(null);

// 下拉刷新
const loading = ref(false);
const onRefresh = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

const leftWallpaperList = wallpaperList.filter(
  item => item.showPosition === 'left',
);

const rightWallpaperList = wallpaperList.filter(
  item => item.showPosition === 'right',
);

const moveBox = (el: HTMLDivElement) => {
  if (!scrollRef.value) return;
  const { left: targetX, width: targetW } = el.getBoundingClientRect();
  const scrollX = scrollRef.value.scrollLeft;
  const scrollW = scrollRef.value.getBoundingClientRect().width;
  const offset = targetX - scrollW / 2;
  scrollRef.value.scrollTo({
    left: scrollX + offset + targetW / 2,
    behavior: 'smooth',
  });
};

const moveCenter = (e: MouseEvent, index: number) => {
  moveBox(e.currentTarget as HTMLDivElement);
  tabId.value = index;
};

const selectExample = (item: { id: number }) => {
  console.log(item.id);
};

const linkCustomIcon = () => {
  router.push('/customIcon');
};

const isGetData = ref(false);

const isShowAcquisition = (value: boolean) => {
  isGetData.value = value;
};
</script>

<style scoped lang="scss">
.tabAnimation {
  transition: transform 0.3s ease;
}

.van-tabs :deep(.van-tabs__nav--line) {
  padding-bottom: 8px;
}
</style>
