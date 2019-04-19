<template>
    <div>
        <div v-show="goodsInfo.sellPrice" >
            <div id="app">
                <div>
                    <div class="top">
                        <div class="header">
                            <div class="left">
                                <h3>购买人数</h3>
                                <span>{{orderCount || 0}}</span>
                                <h4>注:如果拼团失败，则购买人数会相应减少</h4>
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
                                    <strong>原价 <span>{{goodsInfo.originPrice || 0 | Money}}</span></strong>
                                </div>
                            </div>
                        </div>
                        <div class="rules">
                            <h3>活动规则</h3>
                            <span>1.进入此页面者均为护士加定向邀请，可一键开团成为推荐人；</span>
                            <span>2.邀请好友开团，您和好友各享团购金额的10%奖励金；</span>
                            <span>3.您和好友发起的拼团，可让护士享受{{goodsInfo.saveMoney ||0 | Money}}元课程优惠；</span>
                            <span>4.拼团结束48小时后，推广奖励金会划入到账户余额，支持提现；</span>
                            <span>5.工作人员会在每月5号处理上月提现申请，1-5个工作日到账。</span>
                        </div>
                        <div class="goodDetails">
                            <h3>商品详情</h3>
                            <img src="../../assets/img/0.png" alt="">
                            <img src="../../assets/img/1.png" alt="">
                            <img src="../../assets/img/2.png" alt="">
                            <img src="../../assets/img/3.png" alt="">
                            <img src="../../assets/img/4.png" alt="">
                            <img src="../../assets/img/5.png" alt="">
                            <img src="../../assets/img/6.png" alt="">
                            <img src="../../assets/img/7.png" alt="">
                            <img src="../../assets/img/8.png" alt="">
                            <img src="../../assets/img/9.jpg" alt="" v-if="window.URLPARAMS.actId != 2">
                            <img src="../../assets/img/10.jpg" alt="" v-if="window.URLPARAMS.actId != 2">
                            <img src="../../assets/img/11.jpg" alt="" v-if="window.URLPARAMS.actId != 2">
                            <img src="../../assets/img/12.jpg" alt="" v-if="window.URLPARAMS.actId != 2">
                            <!-- <img src="../../assets/img/13.png" alt=""> -->
                            <!-- <img src="../../assets/img/14.png" alt="">
                            <img src="../../assets/img/15.png" alt="">
                            <img src="../../assets/img/16.png" alt=""> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="start" @click="shareToFriend" >
                <h3>邀请好友开团</h3>
                <span>每成交一人获得返佣{{activity.leaderReward || 0 | Money}}</span>
            </div>
            <!--<div class="end" @click="show = true">-->
            <!--<h3>本次活动已结束</h3>-->
            <!--</div>-->
            <Share :share="share" @know="share = false"></Share>
        </div>
        <div v-show="!goodsInfo.sellPrice" id="loading">
            <img src="../../assets/loading.gif" alt="">
        </div>
    </div>

</template>

<script>
    import {Button,Popup,Toast} from 'vant';
    import CommonMixinP from './commonMixinP.js'
    import {recommenderIndex} from "../../api/recommender";
    import Share from '../../components/Share'
    import {shareFriend,shareFriendQ} from "../../utils/weixin";
    import {accessLog} from "../../utils/app";
    import Config from '../../config/app'
    import BScroll from 'better-scroll'
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
            shareToFriend(){
                this.share = true;
                let reportLog = {
                    activityId:window.URLPARAMS.actId || 1,
                    groupId:this.groupInfo.id,
                    pageUrl:'/pages/mainPage.html',
                    pageName:'邀请人主页',
                    clickEvent:'点击邀请好友开团',
                    clickEventName:'邀请好友开团'
                };
                accessLog(reportLog);
            },
            shareFriend(){
                let config = {
                    shareTitle:'团购优惠已送达，快来领取',
                    shareBody:'快接受邀请，获取拼团优惠吧！',
                    shareUrl: Config.shareUrl +'activityPage.html?recommenderUserId='+ this.recommenderId + '&actId=' + window.URLPARAMS.actId || 1 + '&kolStatus=1' ,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };
                shareFriend(config)
                shareFriendQ(config)
            },
            wxSignatureCallback(){
                recommenderIndex({activityId:window.URLPARAMS.actId || 1}).then(r=>{
                    this.orderCount = r.orderCount;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.recommenderId = r.recommenderUserId
                    this.shareFriend()
                    let reportLog = {
                        activityId:window.URLPARAMS.actId || 1,
                        groupId:this.groupInfo.id,
                        pageUrl:'/pages/mainPage.html',
                        pageName:'邀请人主页',
                        clickEvent:'',
                        clickEventName:''
                    };
                    accessLog(reportLog);
                }).catch(_=>{})




            },
            goWithdraw(){
                window.location.href = './withdraw.html?actId=' + window.URLPARAMS.actId || 1;
            },
            // openGroupByShare(){
            //     this.share = true;
            //     // crtGroupOpen({
            //     //     activityId: window.URLPARAMS.actId,
            //     //     mobile:'18513891718',
            //     //     recommenderUserId:8,
            //     //     groupId:''
            //     // }).then(r=>{}).catch(_=>{
            //     // })
            // }
        },
        mounted() {



            // let wrapper = document.querySelector('#app')
            //
            // const options = {
            //
            //     click: true,
            //
            //     taps: true
            //
            // };
            // let scroll = new BScroll(wrapper,options)
        },
        beforeDestroy: function () {

        },
        components: {Button,Popup,Share}
    }
</script>
<style lang="less" scoped>

</style>