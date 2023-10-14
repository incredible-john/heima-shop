export type PageResult<T> = {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页数据
   */
  items: T[]
  /**
   * 当前页数
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  pageSize: number
}

/**通用分页参数类型 */
export type PageParams = {
  page?: number
  pageSize?: number
}

export type GoodsItem = {
  /** 商品描述 */
  desc: string
  /** 商品折扣 */
  discount: number
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品已下单数量 */
  orderNum: number
  /** 商品图片 */
  picture: string
  /** 商品价格 */
  price: number
}
