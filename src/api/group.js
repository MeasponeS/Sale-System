

import request from '../utils/request.js'

// 分享链接开团
export function crtGroupOpen(params) {
    return request({
        url: '/group/crtGroupOpen',
        method: 'post',
        data: params
    })
}