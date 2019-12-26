<<<<<<< HEAD
import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: 'https://blog.csdn.net/qq_33243355', // process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      if (res.code === -200 || res.code === 403) {
        
      }
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    
    return Promise.reject(error)
  }
)

export default service
=======
/**
 2  * 封装http 请求方法
 3  */
     // const apiUrl = 'http://120.26.105.35:8092' // 服务器api地址
      // const apiUrl = 'https://120.26.105.35:8093' // 服务器api地址
    // const apiUrl = 'https://www.foome.com.cn:8093' // 服务器api地址
      const apiUrl = 'http://47.102.214.252:9099' // 服务器api地址

      const http = (params) => {
    // 返回promise 对象
        return new Promise((resolve, reject) => {
          uni.request({
            url: apiUrl + params.url, // 服务器url+参数中携带的接口具体地址
            data: params.data, // 请求参数
        // header: params.header || {
        //   'Content-Type': 'application/x-www-form-urlencoded'// 设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
        // },
            method: params.method || 'POST', // 默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式
       // dataType: params.dataType, // 返回的数据格式,默认为JSON，特殊格式可以在调用的时候传入参数
       // responseType: params.responseType, // 响应的数据类型
            success: function(res) {
         // 接口访问正常返回数据
              if (res.code === 200) {
                resolve(res.data)
              } else {
                resolve(res.data)
              }
          // resolve(res.data)
            },
            fail: function(e) {
          // errorToast()
              reject(e)
            }
          })
        })
      }
      module.exports = {
        http: http
      }
>>>>>>> 28a9ad44651d5b91a67e95f334221d690aa553c4
