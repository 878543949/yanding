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
}