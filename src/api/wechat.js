import request from '../utils/request.js'

export function wxLogin(params) {
    return request({
        url: '/sale/api/wx/wxLogin',
        method: 'get',
        data: params
    })
}