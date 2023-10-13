<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotPanelAPI } from '@/services/home'
import CustomerNavBar from './components/CunstomerNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotPanelItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/component'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const hotPanelList = ref<HotPanelItem[]>([])
const getHotPanelData = async () => {
  const res = await getHomeHotPanelAPI()
  hotPanelList.value = res.result
}

const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
  console.log('滚动触底！')
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHotPanelData()
})

const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotPanelData()])
  isTriggered.value = false
}
</script>

<template>
  <CustomerNavBar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotPanelList" />
    <XtxGuess ref="guessRef" />
    <view class="index">index</view>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
