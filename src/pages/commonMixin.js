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
        wxSignature({url:window.location.href.split('?')[0]}).then(r=>{
            if (r.resultCode == 500) return;
            if (r.signature.appId == null || r.signature.appId == 0) {
                console.log('获取分享配置信息失败');
            } else {
                if(!getToken()){
                    window.location.href =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
                        r.signature.appId  + "&redirect_uri=" + encodeURIComponent('https://wxauth.hulian120.com/open/getCodeFor')  +   "&response_type=code&scope=snsapi_userinfo&state=student#wechat_redirect";
                    return
                }

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

                }
            }).catch(_=>{Toast('获取签名信息失败')});




    },
    beforeDestroy: function () {

    },
    components: {}
}
