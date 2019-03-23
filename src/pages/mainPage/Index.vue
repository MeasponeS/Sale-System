<template>
    <div id="app" v-if="goodsInfo.sellPrice">
        <div class="top">
            <div class="header">
                <div class="left">
                    <h3>购买人数</h3>
                    <span>{{orderCount || 0}}</span>
                </div>
                <div class="right" @click="goWithdraw">查看详情</div>
            </div>
            <div class="goods">
                <h3>本次团购商品</h3>
                <div class="good">
                    <div class="goodsName">
                        <h3>{{goodsInfo.name || '无'}}</h3>
                        <span>{{activity.minCount || 0}}人可成团</span>
                    </div>
                    <div class="goodsPrice">
                        <span>拼团价{{goodsInfo.sellPrice || 0 | Money}}</span>
                        <em>省{{goodsInfo.saveMoney ||0 | Money}}</em>
                        <strong>价格 <span>{{goodsInfo.originPrice || 0 | Money}}</span></strong>
                    </div>
                </div>
            </div>
            <div class="rules">
                <h3>活动规则</h3>
                <span>1. 一键开团成为团长，享受折扣优惠；</span>
                <span>2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣</span>
                <span>3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3</span>
                <span>4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现</span>
                <span>5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账</span>
            </div>
            <div class="goodDetails">
                <h3>商品详情</h3>
                <img src="../../assets/img/1.png" alt="">
                <img src="../../assets/img/2.png" alt="">
                <img src="../../assets/img/3.png" alt="">
                <img src="../../assets/img/4.png" alt="">
                <img src="../../assets/img/5.png" alt="">
                <img src="../../assets/img/6.png" alt="">
                <img src="../../assets/img/7.png" alt="">
                <img src="../../assets/img/8.png" alt="">
                <img src="../../assets/img/9.png" alt="">
                <img src="../../assets/img/10.png" alt="">
                <img src="../../assets/img/11.png" alt="">
                <img src="../../assets/img/12.png" alt="">
                <img src="../../assets/img/13.png" alt="">
                <img src="../../assets/img/14.png" alt="">
                <img src="../../assets/img/15.png" alt="">
                <img src="../../assets/img/16.png" alt="">
            </div>
        </div>
        <div class="start" @click="share = true" >
            <h3>邀请好友开团</h3>
            <span>每成交一人获得返佣{{activity.leaderReward || 0 | Money}}</span>
        </div>
        <!--<div class="end" @click="show = true">-->
            <!--<h3>本次活动已结束</h3>-->
        <!--</div>-->
        <Share :share="share" @know="share = false"></Share>
    </div>
</template>

<script>
    import {Button,Popup,Toast} from 'vant';
    import {recommenderIndex} from "../../api/recommender";
    import Share from '../../components/Share'
    import {shareFriend,shareFriendQ} from "../../utils/weixin";
    import {wxSignature} from "../../api/wechat";
    import {getToken, setCurrentPage} from "../../utils/dataStorage";
    import wx from "weixin-js-sdk";
    export default {
        name: 'app',
        data: function () {
            return {
                orderCount:0,// 成功购买人数
                share:false,
                goodsInfo: {},
                activity:{},
                recommenderId:''
            }
        },
        filters:{
            Money:function(value){
                return '￥'+ parseInt(value)/100
            }
        },
        methods: {
            shareFriend(){
                alert('进入配置成功')
                let config = {
                    shareTitle:'团长主页',
                    shareBody:'赶快进入主页参与活动吧',
                    shareUrl:'https://hsj.hulian120.com/pay/activityPage.html?recommenderUserId='+ this.recommenderId + '&actId=' + window.actId ,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };
                shareFriend(config)
                shareFriendQ(config)
            },
            goWithdraw(){
                window.location.href = './withdraw.html'
            },
        },
        mounted() {

            let that = this;
            wxSignature({url:window.location.href}).then(r=>{
                if (r.resultCode == 500) return;
                sessionStorage.setItem('appId',r.signature.appId);
                if(!getToken()){
                    window.location.href = './beforeLogin.html'
                }

                wx.config({
                    debug:false,
                    appId:r.signature.appId,
                    nonceStr:r.signature.nonceStr,
                    timestamp:r.signature.timestamp,
                    signature : r.signature.signature,
                    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','checkJsApi','hideMenuItems','chooseWXPay','showMenuItems'] // 必填，需要使用的JS接口列表
                });

                wx.ready(function () {
                    wx.checkJsApi({
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'chooseWXPay',
                            'hideMenuItems',
                            'showMenuItems'
                        ],
                        success: function (res) {

                        },
                        fail: function (res) {
                            Toast('配置失败')
                        }
                    });

                    wx.hideMenuItems({
                        menuList: [
                            'menuItem:share:appMessage',
                            'menuItem:share:timeline',
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
            }).catch(_=>{Toast('获取签名信息失败')});







            recommenderIndex({activityId:window.actId}).then(r=>{
                this.orderCount = r.orderCount;
                this.goodsInfo = {...r.goodsInfo};
                this.activity = {...r.activity};
                this.recommenderId = r.recommenderUserId
                this.shareFriend()
            }).catch(_=>{})



        },
        beforeDestroy: function () {

        },
        components: {Button,Popup,Share}
    }
</script>
<style lang="less" scoped>

</style>