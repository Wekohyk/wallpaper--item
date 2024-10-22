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
      class="fixed top-0 left-0 z-99999 right-0 bottom-0 bg-black/20 z-99999"
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
      class="fixed z-99999 flex items-center justify-center flex-col left-0 bottom-0 transform"
    >
      <slot name="copyrightNotice">
        <div
          class="w-100vw h-404 bg-#fff px28 pt34 pb86 rounded-t-20 relative top-0 left-0 flex flex-col"
        >
          <!-- copyrightNotice slot -->
          <div
            class="w36 h4 bg-#B3B3B3 rounded-2 opacity-30 absolute top-8 left-50% transform -translate-x-50%"
          ></div>

          <div
            class="flex justify-between items-center rounded-16 bg-#F6F7F9 w-full pl-16 pr-20 py-19 h68"
          >
            <div class="text-14 font-500">发布者</div>
            <div class="flex items-center gap-8">
              <img
                :src="props.itemList?.avatarImg"
                alt=""
                class="w-30 h-30 rounded-50%"
              />
              <div class="text-14 font-500">
                {{ props.itemList?.avatarName }}
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-16 mt-16 text-14 text-#5C5C5C">
            <div>
              1.成都谷罗英科技有限公司对其发行的或与合作伙伴共同发行的全部专辑内容拥有完整的知识产权，受法律保护。
            </div>
            <div>
              2.未经本公司书面许可，任何单位及个人不得以任何方式或理由对专辑内容的任何部分进行使用、复制、修改、抄录、传播或与其它产品捆绑使用、销售。
            </div>
            <div>
              3.凡侵犯本公司版权等知识产权的，本公司必依法追究其法律责任。
            </div>
          </div>

          <div
            class="w-134 h-5 rounded-100 bg-#000 absolute bottom-8 left-50% transform -translate-x-50%"
          ></div>
        </div>
      </slot>

      <div
        class="w-100vw h-404 bg-#fff px28 pt34 pb86 rounded-t-20 relative top-0 left-0 flex flex-col"
      >
        <!-- copyrightNotice slot -->
        <div
          class="w36 h4 bg-#B3B3B3 rounded-2 opacity-30 absolute top-8 left-50% transform -translate-x-50%"
        ></div>

        <!-- userProfile slot -->
        <slot name="userProfile">
          <div class="flex items-center gap-12">
            <img
              :src="props.itemList?.avatarImg"
              alt=""
              class="w56 h56 rounded-50%"
            />
            <div>{{ props.itemList?.avatarName }}</div>
          </div>

          <div class="mt-18 text-14 text-#5C5C5C">
            在我的小世界，安宁清单，明朗欢愉，和我一起体验小组件的快乐吧~
          </div>

          <div class="grid grid-cols-[1fr_1fr] mt24 gap-x-18 gap-y-10">
            <div
              class="flex flex-col items-start justify-center pl12 pr22 py10 bg-#F6F7F9 rounded-10"
              v-for="item in props.itemList?.useApp"
              :key="item.name"
            >
              <div class="flex items-center">
                <img :src="item.img" alt="" class="w-22 h-22 rounded-50%" />
                <div class="text-14">{{ item.name }}</div>
              </div>
              <div class="text-12 text-#B3B3B3">
                {{ item.name + '号: ' + item.accountNumber }}
              </div>
            </div>
          </div>

          <div
            class="w-134 h-5 rounded-100 bg-#000 absolute bottom-8 left-50% transform -translate-x-50%"
          ></div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Wallpaper } from '@/type/home';

interface Props {
  visible: boolean;
  itemList?: Wallpaper;
}

const props = defineProps<Props>();

const emit = defineEmits(['visibleChange']);

const closePopup = () => {
  emit('visibleChange', false);
};
</script>

<style scoped lang="scss"></style>
