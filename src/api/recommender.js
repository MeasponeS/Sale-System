import request from '../utils/request.js'

export function generateRecommender(params) {
    return request({
        url: '/sale/api/recommender/generateRecommender',
        method: 'post',
        data: params
    })
}


export function sendSmsCode(params) {
    return request({
        url: '/sale/api/recommender/sendSmsCode',
        method: 'post',
        data: params
    })
}

export function checkSmsCode(params) {
    return request({
        url: '/sale/api/recommender/checkSmsCode',
        method: 'post',
        data: params
    })
}


// 邀请人主页
export function recommenderIndex(params) {
    return request({
        url: '/sale/api/recommender/index',
        method: 'get',
        params: params
    })
}
