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
          class="flex items-center justify-center gap-2 w-60 h-26 bg-orange/8% rounded-10"
        >
          <img src="/home/contribute.webp" class="w-20 h-20" />
          <div class="text-#FF9500 text-13 font-600">投稿</div>
        </div>

        <Icon icon="ph:question" width="28px" height="28px" color="#7A7A7A" />
      </div>
    </template>

    <template #navigationBarContainer>
      <div
        class="px-16 overflow-x-scroll scrollbar-hidden w-full h-30 whitespace-nowrap flex gap-24 items-center justify-start relative"
        ref="scrollRef"
      >
        <div
          v-for="(item, index) in wallpaperTypeList"
          :key="item.id"
          class="flex flex-col items-center gap-2 rounded-1"
          @click="moveCenter($event, index)"
        >
          <div
            class="text-14"
            :class="tabId === item.id ? ' text-#0A7AFF' : ''"
          >
            {{ item.name }}
          </div>
        </div>
        <div
          class="w-20 h-3 rounded-10 bg-#0A7AFF tabAnimation absolute top-26 left-19"
          :style="{ transform: `translateX(${tabId * 53}px)` }"
        ></div>
      </div>
    </template>

    <!-- 主题示例 -->
    <div class="px-16 mt-16 flex justify-between">
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
  </PageLayout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import PageLayout from '@/components/PageLayout.vue';
import ThemeExample from './components/ThemeExample.vue';
import { wallpaperTypeList, wallpaperList } from './date';
import { ref } from 'vue';

const tabId = ref(0);
const scrollRef = ref<HTMLDivElement | null>(null);

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
</script>

<style scoped lang="scss">
.tabAnimation {
  transition: transform 0.3s ease;
}
</style>
