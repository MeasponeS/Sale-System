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
            // this.info.appId = r.signature.appId;
            // this.info.nonceStr = r.signature.nonceStr;
            // this.info.signature = r.signature.signature;
            // this.info.timestamp = r.signature.timestamp;

            wx.config({
                debug:false,
                appId:r.signature.appId,
                nonceStr:r.signature.nonceStr,
                signature : r.signature.signature,
                jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','showMenuItems','hideOptionMenu','closeWindow'] // 必填，需要使用的JS接口列表
            });

            wx.ready(function () {
                wx.hideOptionMenu();
            });
            wx.error(function(){
                // Toast('微信签名失败');
            });
        }).catch(_=>{Toast('获取签名信息失败')});

        wx.ready(function () {
            let shareData = {
                title:'分享给旁友',
                link:'',
                imgUrl:'',
                success:function () {
                    alert(1111)
                },
                cancel:function () {
                    alert(222)
                }
            }
            wx.onMenuShareTimeline(shareData)
            wx.onMenuShareTimeline(shareData);
        });

        wx.error(function (res) {
            alert('error:'+res.msg)
        })








    },
    beforeDestroy: function () {

    },
    components: {}
}
