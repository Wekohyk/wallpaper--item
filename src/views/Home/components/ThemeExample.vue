<template>
  <div class="w-full relative top-0 left-0">
    <img
      v-if="props.itemList.status !== 'normal'"
      :src="
        props.itemList.status === 'hot'
          ? '/home/hotImg.webp'
          : props.itemList.status === 'new'
            ? '/home/newImg.webp'
            : props.itemList.status === 'vip'
              ? '/home/vipImg.webp'
              : ''
      "
      class="absolute top-8 right-8 w-24 h-18"
    />

    <img :src="props.itemList.image" alt="" class="w-full rounded-10" />
    <div class="px-8 pb-12 itemShadow rounded-10">
      <div class="text-14 whitespace-nowrap overflow-hidden text-ellipsis">
        {{ props.itemList.title }}
      </div>
      <div
        class="text-10 text-#8A8A8A whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {{ props.itemList.value }}
      </div>
      <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-4">
          <img
            :src="props.itemList.avatarImg"
            alt=""
            class="w-24 h-24 rounded-50%"
          />
          <div class="text-10 text-#8A8A8A">
            {{ props.itemList.avatarName }}
          </div>
        </div>
        <div class="text-10">{{ props.itemList.usePeople }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Wallpaper } from '@/type/home';

interface Props {
  itemList: Wallpaper;
}

const props = defineProps<Props>();
</script>
<style scoped lang="scss">
.itemShadow {
  box-shadow: 0px 2px 6px 0px #989ebc26;
}
</style>
