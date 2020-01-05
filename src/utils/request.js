
/**
 2  * 封装http 请求方法
 3  */
// const apiUrl = "http://120.26.105.35:8092" // 服务器api地址
// const apiUrl = "https://120.26.105.35:8093" // 服务器api地址
// const apiUrl = "https://www.foome.com.cn:8093" // 服务器api地址
const apiUrl = "http://47.102.214.252:9099" // 服务器api地址

export const http = (input) => {
    // 返回promise 对象
    return new Promise((resolve, reject) => {
        uni.request({
            url: apiUrl + input.url,
            data: input.data,
            header: input.header,
            method: input.method,
            success: (res) => {
                // 接口访问正常返回数据
                if (res.code === 200) {
                    resolve(res.data)
                } else {
                    resolve(res.data)
                }
            },
            fail: (e) => {
                reject(e)
            }
        })
    }).then(data => {
        if (data.code === 200) {
            return data.date;
        } else {
            return Promise.reject(data);
        }
    })
}
export const post = (input, param = {}) => {
    if (typeof input === typeof "") {
        input = {
            url: input
        };
    }
    input.body = param;
    input.method = "POST";
    return http(input);
}
export const get = (input, param = {}) => {
    if (typeof input === typeof "") {
        input = {
            url: input
        };
    }
    input.url = input.url + "?"
    if (param) {
        for (let key in param) {
            input.url += `${key}=${param[key]}&`
        }
        input.url = input.url.substring(0, input.url.length - 1);
    }
    input.method = "GET";
    input.body = param;
    return http(input);
}
