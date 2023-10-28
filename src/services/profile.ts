import { http } from '@/utils/http'
import type { ProfileDetail } from '@/types/member'

export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
