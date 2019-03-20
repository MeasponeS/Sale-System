import {getToken,getUserInfo,getUrlInfo} from '../utils/dataStorage.js'
import {wechatSignature,shareFriendQ,shareFriend} from '../utils/weixin.js'
import {wxSignature,getTokenMethods} from "../api/wechat";
import wx from 'weixin-js-sdk';
import {Toast} from "vant";
export default {
    data: function () {
        return {
            USERINFO:false,
            info:{
                appId:'',
                nonceStr:'',
                signature:'',
                timestamp:''
            }
        }
    },
    created(){

    },
    methods: {

    },
    mounted() {
        let userToken = getToken();
        if(!userToken){
            window.location.href = './beforeLogin.html';
            return
        }


        wxSignature({url:window.location.href.split('?')[0]}).then(r=>{

            if (r.resultCode == 500) return;
            if (r.appId == null || r.appId == 0) {
                console.log('获取分享配置信息失败');
            } else {
                    wx.config({
                        debug:false,
                        appId:r.signature.appId,
                        nonceStr:r.signature.nonceStr,
                        signature : r.signature.signature,
                        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','showMenuItems','hideOptionMenu','closeWindow'] // 必填，需要使用的JS接口列表
                    });

                    wx.ready(function () {
                        wx.checkJsApi({
                            jsApiList: [
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'hideMenuItems'
                            ],
                            success: function (res) {
                                console.log('微信配置成功' + JSON.stringify(res));
                            },
                            fail: function (res) {
                                console.log(JSON.stringify(res));
                            }
                        });
                    });
                    wx.hideMenuItems({
                        menuList: [
                            // 'menuItem:share:timeline',
                            'menuItem:readMode', // 阅读模式
                            "menuItem:share:qq", //分享到qq
                            "menuItem:share:weiboApp", //分享到微博
                            "menuItem:openWithQQBrowser", //qq浏览器打开
                            "menuItem:openWithSafari", //safri打开
                            "menuItem:share:QZone", //空间
                            'menuItem:copyUrl' //复制链接
                        ],
                        success: function (res) {
                            console.log('已隐藏“阅读模式”，“分享到朋友圈”，“复制链接”等按钮');
                        },
                        fail: function (res) {
                            console.log(JSON.stringify(res));
                        }

                    });

                    wx.onMenuShareAppMessage({
                        title: '分享给旁友',
                        desc: '111111',
                        link: '',
                        imgUrl: '',
                        success: function () {
                            console.log("朋友成功");
                        },
                        cancel: function () {},
                        fail: function (res) {}
                    });
                    wx.onMenuShareTimeline({
                        title: '分享到旁友圈',
                        link: '222',
                        imgUrl: '',
                        success: function () {
                            console.log("分享到朋友圈成功");
                        },
                        cancel: function () {},
                        fail: function (res) {
                            console.log("朋友圈失败--" + JSON.stringify(res));
                        }
                    });

                    wx.error(function (res) {
                        console.log('微信分享错误' + res.errMsg);
                    });
                }
            }).catch(_=>{Toast('获取签名信息失败')});




    },
    beforeDestroy: function () {

    },
    components: {}
}
