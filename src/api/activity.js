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

export function rewardList(params) {
    return request({
        url: '/sale/api/activity/rewardList',
        method: 'get',
        params: params
    })
}