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
        wxSignature({url:window.location.href}).then(r=>{
            if (r.resultCode == 500) return;
            if (r.signature.appId == null || r.signature.appId == 0) {

            } else {
                if(!getToken()){
                    window.location.href =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
                        r.signature.appId  + "&redirect_uri=" + encodeURIComponent('https://wxauth.hulian120.com/open/getCodeFor')  +   "&response_type=code&scope=snsapi_userinfo&state=student#wechat_redirect";
                    return
                }
                wx.config({
                    debug:true,
                    appId:r.signature.appId,
                    nonceStr:r.signature.nonceStr,
                    timestamp:r.signature.timestamp,
                    signature : r.signature.signature,
                    jsApiList: ['updateTimelineShareData','updateAppMessageShareData','checkJsApi','hideMenuItems','chooseWXPay'] // 必填，需要使用的JS接口列表
                });

                wx.ready(function () {
                    Toast('签名成功')
                    wx.checkJsApi({
                        jsApiList: [
                            'updateTimelineShareData',
                            'updateAppMessageShareData',
                            'chooseWXPay',
                            'hideMenuItems'
                        ],
                        success: function (res) {

                        },
                        fail: function (res) {
                            Toast('配置失败')
                        }
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

                        },
                        fail: function (res) {

                        }

                    });
                });

                wx.error(function(res){
                    Toast('签名失败')
                });







            }
        }).catch(_=>{Toast('获取签名信息失败')});




    },
    beforeDestroy: function () {

    },
    components: {}
}
