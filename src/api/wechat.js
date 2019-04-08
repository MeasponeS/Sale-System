import request from '../utils/request.js'


// 获取微信签名
export function wxSignature(params) {
    return request({
        closeLoading:true,
        url: 'https://wxauth.hulian120.com/open/wxSignature',
        method: 'get',
        params:params
    })
}

// code换取token
export function getTokenMethods(params) {
    return request({
        url: 'https://wxauth.hulian120.com/open/getToken',
        method: 'get',
        params:params
    })
}
