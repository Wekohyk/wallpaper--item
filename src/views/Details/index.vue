<template>
  <PageLayout goBackHeight="16px" goBackWidth="10px" background="#F6F7F9">
    <template #navigationBarLeading>
      <div class="flex gap-8 items-center pl-14">
        <img
          :src="getWallpaperList.avatarImg"
          alt=""
          class="w-28 h-28 rounded-50%"
        />
        <div>{{ getWallpaperList.avatarName }}</div>
      </div>
    </template>

    <template #navigationBarTrailing>
      <Icon icon="hugeicons:share-04" width="24px" height="24px" />
    </template>

    <div class="w-full h-full overflow-y-auto scrollbar-hidden">
      <div class="px-17 flex gap-20 overflow-x-auto scrollbar-hidden">
        <div
          class="h-full relative mb-20 mt-10"
          v-for="item in getWallpaperList.imageList"
          :key="item"
        >
          <img
            :src="item"
            alt=""
            class="w-190 h-400 rounded-16 backdrop-blur-16 relative z-999"
          />
          <div
            class="bg-#2D2D2D36 blur-8 w-182 h-400 absolute top-10 left-5"
          ></div>
        </div>
      </div>
      <div class="w-full bg-#fff rounded-t-20 px20 pt17 pb24">
        <div class="flex items-center justify-between">
          <div class="text-16 font-500">{{ getWallpaperList.title }}</div>
          <div class="flex items-center">
            <div class="text-#8A8A8A text-13">版权声明</div>
            <Icon
              icon="weui:arrow-outlined"
              width="16px"
              height="16px"
              color="#8A8A8A"
            />
          </div>
        </div>
        <div class="text-12 text-#8A8A8A mt-10">
          {{ getWallpaperList.value }}
        </div>

        <div class="flex justify-between items-center mt-24">
          <div class="px50 py10 bg-#F6F7F9 rounded-57 text-#0A7AFF">
            选择安装
          </div>
          <div class="flex flex-col relative top-0 left-0">
            <div
              class="w159 h42 text-center lh-42 bg-#0A7AFF rounded-57 text-#FFF"
              @click="clickBtn"
            >
              {{ applyText }}
            </div>
            <div
              class="h42 text-center lh-42 bg-#FFFFFF/30 absolute"
              :style="progressStyle"
            ></div>
          </div>
        </div>
      </div>

      <div class="w-full h-2"></div>

      <div class="relative top-4 left-0">
        <div
          class="w-50 h-50 absolute top-4 -right-24"
          @click="openAdvertisement"
        >
          <Icon
            icon="material-symbols:close-rounded"
            width="16px"
            height="16px"
            color="#B3B3B3"
          />
        </div>
        <img
          src="/details/advertisementImg.webp"
          alt=""
          class="w-full h-full aspect-ratio-390/84"
        />
      </div>

      <div class="w-full px23 pt-16 bg-#FFF pb44">
        <div class="text-16 font-500">猜你喜欢</div>

        <div class="grid gap-13 grid-cols-3 mt-20">
          <div
            class="rounded-10 overflow-hidden"
            v-for="item in wallpaperList"
            :key="item.id"
          >
            <img
              :src="item.image"
              alt=""
              class="w-full h-full aspect-ratio-108/228"
            />
          </div>
        </div>
      </div>
    </div>
  </PageLayout>

  <FeedbackPopup
    :visible="isShowAdvertisement"
    @visibleChange="closeAdvertisement"
  ></FeedbackPopup>
</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import FeedbackPopup from '@/components/FeedbackPopup.vue';
import { Icon } from '@iconify/vue';

import { wallpaperList } from '@/views/date';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { showFailToast, showSuccessToast } from 'vant';

// 获取router的参数, 根据router参数获取展示的数据
const router = useRouter();
const id = Number(router.currentRoute.value.params.id);
const getWallpaperList = wallpaperList[id];

// 关闭广告
const isShowAdvertisement = ref(false);

const openAdvertisement = () => {
  isShowAdvertisement.value = true;
};

const closeAdvertisement = (value: boolean) => {
  isShowAdvertisement.value = value;
};

// progressWidth
const progressWidth = ref(0);
const progressRadius = ref(0);
const progressNum = ref(0);
const applyText = ref('一键应用');

const progressStyle = ref({
  width: progressWidth.value + 'px',
  borderRadius: progressRadius.value + 'px',
});

// 获取随机数
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clickBtn = () => {
  const handleCompletion = () => {
    const randomNum = getRandomNum(1, 10);
    console.log(randomNum);
    if (randomNum >= 3) {
      showSuccessToast('下载壁纸成功');
    } else {
      showFailToast('下载壁纸失败');
    }
  };

  const updateProgress = () => {
    progressWidth.value += 1.59;
    progressNum.value += 1;

    if (progressNum.value < 50) {
      applyText.value = '正在下载壁纸 ' + progressNum.value + '%';
    } else if (progressNum.value < 100) {
      applyText.value = '正在保存壁纸 ' + progressNum.value + '%';
    } else {
      clearInterval(setInterTimer);
      applyText.value = '一键应用';
      progressWidth.value = 0;
      progressNum.value = 0;
      handleCompletion();
    }

    progressStyle.value = {
      width: progressWidth.value + 'px',
      borderRadius: progressRadius.value + 'px',
    };
  };

  const setInterTimer = setInterval(updateProgress, 30);
};
</script>

<style scoped lang="scss"></style>
