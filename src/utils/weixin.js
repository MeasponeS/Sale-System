



// 要使用请安装weixin-js-sdk

import wx from 'weixin-js-sdk';
import {Toast} from 'vant'





function shareFriend(config){
    console.log(config);
    wx.onMenuShareAppMessage({
        title: config.shareTitle, // 分享标题
        desc: config.shareBody, // 分享描述
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        //type: '', // 分享类型,music、video或link，不填默认为link
        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            Toast('分享成功');
        },
        cancel: function () {
            Toast('分享失败');
        }
    });
}

function shareFriendQ(config){
    setTimeout(()=>{
        console.log(config);
        wx.onMenuShareTimeline({
            title: config.shareTitle, // 分享标题
            link: config.shareUrl, // 分享链接
            imgUrl: config.shareImg, // 分享图标
            success: function () {
                Toast('分享成功');
            },
            cancel: function () {
                Toast('分享失败');
            }
        });
    },600)

}


function vxPay(r) {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId": r.appId,
            "timeStamp": r.timeStamp,
            "nonceStr": r.nonceStr,
            "package": r.packageValue,
            "signType": "MD5",
            "paySign": r.paySign
        },
        function (res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                setTimeout(()=>{
                    window.location.href = 'https://hsj.hulian120.com/pay/groupBuy.html?groupId='+window.URLPARAMS.groupId + 'leaderId' + window.URLPARAMS.leaderId+'&actId=' + window.URLPARAMS.actId + '&status=' + window.URLPARAMS.status + '&pay=1'
                },300)
            } else {
                if (res.err_msg == "get_brand_wcpay_request:cancel") {
                    Toast("您已取消支付。");
                } else {
                    Toast('充值失败，请稍后再试。');
                }
            }
        }
    );
}
export {shareFriendQ,shareFriend,vxPay}
