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
        class="rounded-16 flex flex-col justify-center items-center overflow-hidden"
      >
        <TransitionGroup name="slide-right">
          <van-cell
            v-for="(item, index) in toggleImgList"
            :key="item"
            class="my-grid-item"
            :class="getClass(index)"
          >
            <template #title>
              <van-swipe-cell class="w-full">
                <ToggleImg
                  @chooseNewIcon="chooseNewIcon"
                  @chooseOldIcon="chooseOldIcon"
                ></ToggleImg>
                <template #right>
                  <div
                    @click="beforeClose(index)"
                    class="flex justify-center items-center w-74 h-full bg-#FF3B30 text-center text-#fff text-14"
                  >
                    删除
                  </div>
                </template>
              </van-swipe-cell>
            </template>
          </van-cell>
        </TransitionGroup>
      </div>

      <div class="flex items-center justify-center mt-19 mb-13">
        <Icon
          icon="ic:round-add-circle"
          width="30px"
          height="30px"
          color="#0A7AFF"
          @click="addToggleImg"
        />
      </div>

      <!-- 广告 -->
      <div class="bg-#FFF rounded-16 px-16 pt-16 pb-20 relative top-0 left-0">
        <div class="w-full h-full mb-28">
          <div
            class="w-50 h-50 absolute top-10 -right-20"
            @click="openAdvertisement"
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="10px"
              height="10px"
              color="#B3B3B3"
            />
          </div>

          <img
            src="/customIcon/advertisementImg.webp"
            class="w-full h-full rounded-14"
          />
        </div>

        <div class="text-14">
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
  <FeedbackPopup
    :visible="isShowAdvertisement"
    @visibleChange="closeAdvertisement"
  ></FeedbackPopup>
</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
import ToggleImg from './components/ToggleImg.vue';
import FeedbackPopup from '@/components/FeedbackPopup.vue';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { showFailToast, showToast } from 'vant';

const toggleImgList = ref<number[]>([0, 1, 2]);

// 删除 \ 添加动画效果
const getClass = (index: number) => {
  if (index === toggleImgList.value.length - 1) {
    return 'slide-right-enter-active';
  } else {
    return '';
  }
};

// 添加
const addToggleImg = () => {
  toggleImgList.value.push(new Date().valueOf());
};

// 删除
const beforeClose = (index: number) => {
  toggleImgList.value.splice(index, 1);
};

// 点击原图标
const chooseOldIcon = () => {
  showToast('暂时不支持选择App');
};

// 点击新图标
const chooseNewIcon = () => {
  showFailToast('请先选择App');
};

// 关闭广告
const isShowAdvertisement = ref(false);

const openAdvertisement = () => {
  isShowAdvertisement.value = true;
};

const closeAdvertisement = (value: boolean) => {
  isShowAdvertisement.value = value;
};
</script>
<style scoped lang="scss">
.my-grid-item {
  padding: 0px;
}

// TransitionGroup 动画
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
}
</style>
