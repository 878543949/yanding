import request from './request'

// 获取新闻列表
export function agreementType (params) {
  return request({
    url: '/agreement/type',
    method: 'get',
    params
  })
}