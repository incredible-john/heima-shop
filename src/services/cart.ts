import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

/**
 * 更改购物车单品数量
 * @param skuId SKUid
 * @param data selected 选中状态 count 单品数量
 * @returns
 */
export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: {
    selected?: boolean
    count?: number
  },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}
