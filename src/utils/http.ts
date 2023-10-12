/*
 * 添加拦截器：
 *    拦截 request 请求
 *    拦截 uploadFile 文件上传
 *
 * TODO:
 *    1.非 http 开头需拼接地址
 *    2.请求超时
 *    3.添加小程序端请求头标识
 *    4.添加 token 请求头标识
 */

import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

interface Data<T> {
  code: string
  msg: string
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 获取数据成功，调用resolve
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误，调用regject，清理用户信息，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 通用错误，调用reject
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 1.非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 2.请求超时
    options.timeout = 10000
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
