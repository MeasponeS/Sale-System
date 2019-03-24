import request from '../utils/request.js'

export function log(params) {
    return request({
        url: '/sale/api/accesslog/log',
        method: 'post',
        data:params
    })
}


