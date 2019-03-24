import request from '../utils/request.js'

export function log(params) {
    return request({
        closeLoading:true,
        url: '/sale/api/accesslog/log',
        method: 'post',
        data:params
    })
}


