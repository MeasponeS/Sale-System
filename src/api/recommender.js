import request from '../utils/request.js'

// 生成邀请人
export function generateRecommender(params) {
    return request({
        url: '/sale/api/recommender/generateRecommender',
        method: 'post',
        data: params
    })
}

// 生成普通团长
export function generateLeader(params) {
    return request({
        url: '/sale/api/recommender/generateLeader',
        method: 'get',
        params: params
    })
}


// 登陆前发送短信
export function sendSmsCode(params) {
    return request({
        url: '/sale/api/recommender/sendSmsCode',
        method: 'post',
        data: params
    })
}


// 校验短信验证码
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
