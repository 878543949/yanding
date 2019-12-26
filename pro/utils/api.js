<<<<<<< HEAD
import request from './request'

// 获取新闻列表
export function agreementType (params) {
  return request({
    url: '/agreement/type',
    method: 'get',
    params
  })
=======
import {http} from './request.js'
import qs from 'qs'

// 协约类型
export function agreementList(params) {
	// const data = qs.stringify(params)
	return http({
		url: '/agreement/type',
		data: params,
		method: 'GET'
	})
}
//协约次数类型
export function agreementCountList(params) {
	// const data = qs.stringify(params)
	return http({
		url: '/agreement/type/count',
		data: params,
		method: 'GET'
	})
}
//周期类型
export function agreementCycle(params) {
	// const data = qs.stringify(params)
	return http({
		url: '/agreement/type/cycle',
		data: params,
		method: 'GET'
	})
}
//约定周期
export function agreementCycleTime(params) {
	// const data = qs.stringify(params)
	return http({
		url: '/agreement/type/cycle/time',
		data: params,
		method: 'GET'
	})
>>>>>>> 28a9ad44651d5b91a67e95f334221d690aa553c4
}