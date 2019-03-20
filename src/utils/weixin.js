



// 要使用请安装weixin-js-sdk

import wx from 'weixin-js-sdk';
import {Toast} from 'vant'






function shareFriend(config,callback){
    wx.onMenuShareAppMessage({
        title: config.shareTitle, // 分享标题
        desc: config.shareBody, // 分享描述
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        //type: '', // 分享类型,music、video或link，不填默认为link
        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            callback()
        },
        cancel: function () {
            Toast('分享失败');
        }
    });
}

function shareFriendQ(config,callback){
    setTimeout(()=>{
        wx.onMenuShareTimeline({
            title: config.shareTitle, // 分享标题
            link: config.shareUrl, // 分享链接
            imgUrl: config.shareImg, // 分享图标
            success: function () {
                callback()
                //Toast('分享成功');
            },
            cancel: function () {
                Toast('分享失败');
            }
        });
    },600)

}


function vxPay(config) {
    wx.chooseWXPay({
        timestamp: config.timestamp,
        nonceStr: config.noncestr,
        package: config.package,
        paySign: config.paySign
    });

}
export {shareFriendQ,shareFriend,vxPay}
