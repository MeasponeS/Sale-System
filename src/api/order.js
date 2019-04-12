
import request from '../utils/request.js'

// 团长下单
export function creatLeaderOrder(params) {
    return request({
        url: '/sale/api/order/creatLeaderOrder',
        method: 'post',
        data: params
    })
}

// 非团长下单

export function creatGeneralOrder(params) {
    return request({
        url: '/sale/api/order/creatGeneralOrder',
        method: 'post',
        data: params
    })
}

export function wxQueryOrder(params) {
    return request({
        url: '/sale/api/order/wxQueryOrder',
        method: 'post',
        data:params
    })
}
