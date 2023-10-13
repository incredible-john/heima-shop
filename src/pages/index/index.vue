<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import CustomerNavBar from './components/CunstomerNavBar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomerNavBar />
  <XtxSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
