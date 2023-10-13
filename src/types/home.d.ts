/**
 * 首页-广告区域数据类型
 */
export type BannerItem = {
  herfUrl: string
  id: string
  imgUrl: string
  type: number
}

export type CategoryItem = {
  icon: string
  id: string
  name: string
}

export type HotPanelItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: string
}

export type GuessLikeItem = {
  desc: string
  discount: number
  id: string
  name: string
  orderNum: number
  picture: string
  price: number
}
