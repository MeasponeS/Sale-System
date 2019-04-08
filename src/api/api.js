import request from '../utils/request.js'

// 数据埋点
export function log(params) {
    return request({
        closeLoading:true,
        url: '/sale/api/accesslog/log',
        method: 'post',
        data:params
    })
}


