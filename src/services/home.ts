import type { PageResult, PageParams } from '@/types/global'
import type { BannerItem, CategoryItem, GuessLikeItem, HotPanelItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置
 */

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotPanelAPI = () => {
  return http<HotPanelItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 首页-猜你喜欢-小程序
 */
export const getGuesslikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessLikeItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
