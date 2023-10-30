import type { AddressItem, AddressParams } from '@/types/address'

import { http } from '@/utils/http'

/**
 * 添加收货地址
 * @param data 请求参数
 * @returns
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}
