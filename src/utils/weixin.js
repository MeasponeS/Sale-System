



// 要使用请安装weixin-js-sdk

import wx from 'weixin-js-sdk';
import {Toast} from 'vant'





function shareFriend(config){
    wx.onMenuShareAppMessage({
        title: config.shareTitle, // 分享标题
        desc: config.shareBody, // 分享描述
        link: config.shareUrl, // 分享链接
        imgUrl: config.shareImg, // 分享图标
        //type: '', // 分享类型,music、video或link，不填默认为link
        //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            console.log('配置分享好友成功');

            alert('配置成功')
            wx.showMenuItems({
                menuList: ["menuItem:share:timeline","menuItem:share:appMessage"], // 要显示的菜单项，所有menu项见附录3
                success: function (res) {
                    alert('显示成功')
                },
                fail: function (res) {
                    alert('显示失败')
                }
            });
        },
        cancel: function () {
            console.log('配置分享好友失败');
        }
    });
}

function shareFriendQ(config){
    setTimeout(()=>{
        wx.onMenuShareTimeline({
            title: config.shareTitle, // 分享标题
            link: config.shareUrl, // 分享链接
            imgUrl: config.shareImg, // 分享图标
            success: function () {
                console.log('配置分享朋友圈成功');
                sessionStorage.setItem('shareFriendsConfig',true)
            },
            cancel: function () {
                console.log('配置分享朋友圈失败');
            }
        });
    },600)

}


function vxPay(r,callBack) {
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
                alert('支付成功啦')
                callBack()
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
