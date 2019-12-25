import {http} from './request.js'
import qs from 'qs'

// 设备列表
export function agreementList(params) {
	// const data = qs.stringify(params)
	return http({
		url: '/agreement/type',
		data: params,
		method: 'GET'
	})
}

export function agreementCountList(params) {
	// const data = qs.stringify(params)
	return http({
		url: '/agreement/type/count',
		data: params,
		method: 'GET'
	})
}
