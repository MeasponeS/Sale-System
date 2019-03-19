import request from '../utils/request.js'

export function wxLogin(params) {
    return request({
        url: '/sale/api/wx/wxLogin',
        method: 'get',
        data: params
    })
}



export function wxSignature(params) {
    return request({
        url: 'https://wxauth.hulian120.com/open/wxSignature',
        method: 'get',
        params:params
    })
}

export function getTokenMethods(params) {
    return request({
        url: 'http://wxauth.hulian120.com/open/getToken',
        method: 'get',
        params:params
    })
}
