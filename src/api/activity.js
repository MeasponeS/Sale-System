import request from '../utils/request.js'

export function activityReward(params) {
    return request({
        url: '/sale/api/activity/activityReward',
        method: 'get',
        params: params
    })
}

// 团长活动页
export function leaderActivity(params) {
    return request({
        closeCache:true,
        url: '/sale/api/activity/leaderActivity',
        method: 'get',
        params: params
    })
}

// 学员活动页
export function userActivity(params) {
    return request({
        url: '/sale/api/activity/userActivity',
        method: 'get',
        params: params
    })
}

// 活动收益页
export function rewardList(params) {
    return request({
        url: '/sale/api/activity/rewardList',
        method: 'get',
        params: params
    })
}


// 提现记录
export function withdrawList(params) {
    return request({
        url: '/sale/api/activity/withdrawList',
        method: 'get',
        params: params
    })
}

// 实名认证

export function realNameAuth(params) {
    return request({
        url: '/sale/api/activity/realNameAuth',
        method: 'post',
        data: params
    })
}

// 登陆时获取图形验证码
export function randomImg(params) {
    return request({
        closeLoading:true,
        url: '/sale/api/activity/randomImg',
        method: 'get',
        params: params
    })
}

// 实名认证发送短信
export function sendMsgCode(params) {
    return request({
        closeLoading:true,
        url: '/sale/api/activity/sendMsgCode',
        method: 'get',
        params: params
    })
}


// 提现接口
export function withdraw(params) {
    return request({
        url: '/sale/api/activity/withdraw',
        method: 'post',
        data: params
    })
}


// 提现接口
export function quickGroupList(params) {
    return request({
        closeLoading:true,
        url: '/sale/api/activity/quickGroupList',
        method: 'get',
        params: params
    })
}