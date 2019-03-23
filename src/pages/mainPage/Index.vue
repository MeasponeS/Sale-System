<template>
    <div id="app">
        <div v-if="goodsInfo.sellPrice">
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
        <div v-else id="loading">
            <img src="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=loading动画&step_word=&hs=2&pn=38&spn=0&di=101123149600&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=6&st=undefined&cs=3217777612%2C1827677914&os=772786184%2C1005349133&simid=0%2C0&adpicid=0&lpn=0&ln=1877&fr=&fmq=1553334370081_R&fm=&ic=undefined&s=undefined&hd=0&latest=0&copyright=0&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg10.cache.hxsd.com%2Fnews%2F2015%2F11%2F12%2F691442_1447295058_5.gif&fromurl=ippr_z2C%24qAzdH3FAzdH3Fgjof_z%26e3Bixf1_z%26e3Bv54AzdH3FCG-v6jwptejAzdH3Fda8c88AzdH3Fml899d_c_z%26e3Bip4s&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=&force=undefined" alt="">
        </div>
    </div>
</template>

<script>
    import {Button,Popup,Toast} from 'vant';
    import CommonMixinP from './commonMixinP.js'
    import {recommenderIndex} from "../../api/recommender";
    import Share from '../../components/Share'
    import wx from 'weixin-js-sdk';
    import {shareFriend,shareFriendQ} from "../../utils/weixin";

    export default {
        name: 'app',
        mixins: [CommonMixinP],
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
                let config = {
                    shareTitle:'团长主页',
                    shareBody:'赶快进入主页参与活动吧',
                    shareUrl:'https://hsj.hulian120.com/pay/activityPage.html?recommenderUserId='+ this.recommenderId + '&actId=' + window.actId ,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };
                shareFriend(config)
                shareFriendQ(config)
            },
            wxSignatureCallback(){
                recommenderIndex({activityId:window.actId}).then(r=>{
                    this.orderCount = r.orderCount;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.recommenderId = r.recommenderUserId
                    this.shareFriend()
                }).catch(_=>{})




            },
            goWithdraw(){
                window.location.href = './withdraw.html'
            },
            // openGroupByShare(){
            //     this.share = true;
            //     // crtGroupOpen({
            //     //     activityId: window.actId,
            //     //     mobile:'18513891718',
            //     //     recommenderUserId:8,
            //     //     groupId:''
            //     // }).then(r=>{}).catch(_=>{
            //     // })
            // }
        },
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {Button,Popup,Share}
    }
</script>
<style lang="less" scoped>

</style>