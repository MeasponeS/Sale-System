
import request from '../utils/request.js'

// 团长下单
export function creatLeaderOrder(params) {
    return request({
        url: '/order/creatLeaderOrder',
        method: 'post',
        data: params
    })
}

// 非团长下单

export function creatGeneralOrder(params) {
    return request({
        url: '/order/creatGeneralOrder',
        method: 'post',
        data: params
    })
}