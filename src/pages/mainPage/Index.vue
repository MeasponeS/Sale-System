<template>
    <div id="app">
        <div class="top">
            <div class="header">
                <div class="left">
                    <h3>成功购买人数</h3>
                    <span>{{orderCount || 0}}</span>
                </div>
                <div class="right" @click="goWithdraw">查看详情</div>
            </div>
            <div class="goods">
                <h3>本次拼团商品</h3>
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
                <img :src="goodsInfo.imageUrl" alt="">
            </div>
        </div>
        <div class="start" @click="openGroupByShare">
            <h3>邀请好友开团</h3>
            <span>每成交一人获得返佣{{activity.leaderReward || 0 | Money}}</span>
        </div>
        <div class="end" @click="show = true">
            <h3>本次活动已结束</h3>
        </div>
        <Popup v-model="show" :close-on-click-overlay="false" >
            <div class="wrap">
                <h3>开团方式</h3>
                <Button class="indexBtn" @click="goActivityPage">A：分享到朋友圈</Button>
                <Button class="indexBtn" >B：分享给好友</Button>
                <Button class="bottomBtn" @click="show = false">取消</Button>
            </div>
        </Popup>
        <Share :share="share" @know="share = false"></Share>
    </div>
</template>

<script>
    import {Button,Popup,Toast} from 'vant';
    import CommonMixin from '../commonMixin.js'
    import {recommenderIndex} from "../../api/recommender";
    import Config from '../../config/app'
    import Share from '../../components/Share'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                show:false,
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
            wxSignatureCallback(){
                let config = {
                    shareTitle:'分享给好友开团',
                    shareBody:'这是我分享给好友得团',
                    shareUrl:'https://hsj.hulian120.com/pay/groupBuy.html?recommenderUserId='+window.URLPARAMS.id + 'activityId' + Config.activityId ,
                    shareImg:'//www.baidu.com/img/bd_logo1.png?where=super'
                };

                wx.updateAppMessageShareData({
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



            },
            goWithdraw(){
                window.location.href = './withdraw.html'
            },
            goActivityPage(){
                window.location.href = './activityPage.html?id='+this.recommenderId
            },
            openGroupByShare(){
                this.share = true;
                this.show = false;
                // crtGroupOpen({
                //     activityId: Config.activityId,
                //     mobile:'18513891718',
                //     recommenderUserId:8,
                //     groupId:''
                // }).then(r=>{}).catch(_=>{
                // })
            }
        },
        mounted() {
            recommenderIndex({activityId:Config.activityId}).then(r=>{
                this.orderCount = r.orderCount;
                this.goodsInfo = {...r.goodsInfo};
                this.activity = {...r.activity};
                this.recommenderId = r.recommenderUserId
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {Button,Popup,Share}
    }
</script>
<style lang="less" scoped>

</style>