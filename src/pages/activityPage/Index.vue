<template>
    <div id="app">
        <div v-if="goodsInfo.sellPrice">
            <img class="topImg" :src="activity.imageUrl" alt="">
            <div class="title">
                <img src="./img/long.png" alt="">
            </div>
            <div class="top">
                <div class="goods">
                    <div class="good">
                        <div class="goodsName">
                            <h3>{{goodsInfo.name || '无'}}</h3>
                            <span>{{activity.minCount || 0  }}人可成团</span>
                        </div>
                        <div class="goodsPrice">
                            <span style="font-weight: bold">拼团价{{goodsInfo.sellPrice || 0   | Money}}</span>
                            <em>省{{goodsInfo.saveMoney || 0   | Money}}</em>
                            <strong>原价<span>{{goodsInfo.originPrice || 0   | Money}}</span></strong>
                            <strong class="countNum">已有{{orderCount || 0  }}人成团</strong>
                        </div>
                    </div>
                </div>
                <!--<div class="rules">-->
                <!--<h3>活动规则</h3>-->
                <!--<span>1. 一键开团成为团长，享受折扣优惠；</span>-->
                <!--<span>2.邀请好友拼团享受折扣优惠，成团后你获得推广返佣</span>-->
                <!--<span>3.推广返佣与购买人数正相关，每1人购买，推广返佣增加￥338.3</span>-->
                <!--<span>4.拼团结束48小时后，推广返佣会划入到账户余额，支持提现</span>-->
                <!--<span>5.工作人员会在每月1号处理上个月的提现申请，1-3天内到账</span>-->
                <!--</div>-->
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
            <div class="start" @click="share = true" v-if="groupInfo.status == 1 && countDownSenconds >= 0">
                邀请好友获得更多返利
                <h4><Countdown :second="countDownSenconds" :status="groupInfo.status" @toggle="countDownSenconds--" @end="timeOut" style="display: block"></Countdown></h4>
            </div>
            <div class="start" @click="showOpen = true" v-else>
                我要开团
            </div>

            <!--<div class="end" v-if="countDownSenconds == 0" >-->
            <!--<h3>本次活动已结束</h3>-->
            <!--</div>-->
            <div class="income" @click="goIncome">
                <img src="./img/2.png" alt="">
            </div>
            <Popup v-model="showOpen" :close-on-click-overlay="false" position="bottom">
                <div class="wrap">
                    <h3>开团方式</h3>
                    <Button class="indexBtn"
                            @click="goCheckMobile"
                            :disabled="groupInfo && groupInfo.status && groupInfo.status == 1"
                    >A：购买商品，并成为团长</Button>
                    <Button class="indexBtn" @click="openGroup">
                        B：通过邀请好友成为团长
                    </Button>
                    <Button class="bottomBtn" @click="showOpen = false">取消</Button>
                </div>
            </Popup>
            <PayPopup :showMobile="showMobile" @closePay="showMobile = false " @wxPay="wxPay" ></PayPopup>
            <Share :share="share" @know="know"></Share>
        </div>
        <div v-else id="loading">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553344736815&di=6a000ecfd157400769abe837c3013928&imgtype=0&src=http%3A%2F%2Fimg10.cache.hxsd.com%2Fnews%2F2015%2F11%2F12%2F691442_1447295058_5.gif" alt="">
        </div>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {leaderActivity} from "../../api/activity";
    import {Popup,Button,Toast} from 'vant';
    import PayPopup from '../../components/PayPopup'
    import Share from '../../components/Share'
    import {creatLeaderOrder} from "../../api/order";
    import {crtGroupOpen} from "../../api/group";
    import {vxPay,shareFriend,shareFriendQ} from '../../utils/weixin'
    import wx from 'weixin-js-sdk';
    import Countdown from '../../components/Countdown'

    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                showOpen:false,
                showMobile:false,
                share:false,
                mobile:'',    // 用于支付前填写的手机号
                orderCount:'',// 成功购买人数
                leaderHasBuy:'',
                goodsInfo: {},
                activity:{},
                groupInfo:{},
                countDownSenconds:'',
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
                    shareTitle:'『团购优惠』和好朋友一起领',
                    shareBody:'健康管理师＆护理评估师，现在团购立减¥880',
                    shareUrl:'https://hsj.hulian120.com/pay/groupBuy.html?groupId='+this.groupInfo.id + '&leaderId=' + this.groupInfo.leaderId+'&actId=' + window.actId + '&status=' + this.groupInfo.status ,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };
                shareFriend(config)
                shareFriendQ(config)
            },
            wxSignatureCallback(){
                leaderActivity({activityId:window.actId}).then(r=>{
                    this.orderCount = r.orderCount;
                    this.leaderHasBuy = r.leaderHasBuy;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.groupInfo = {...r.groupInfo};
                    this.countDownSenconds = r.countDownSenconds;
                    if(this.groupInfo.id && this.groupInfo.id != null ){
                        this.shareFriend()
                    }
                }).catch(_=>{});

            },
            goIncome(){
                window.location.href = './incomeDetails.html'
            },
            goCheckMobile(){
                this.showOpen = false;
                this.showMobile = true;
            },
            know(){
                this.showOpen = false;
                this.share = false;
                leaderActivity({activityId:window.actId}).then(r=>{
                    this.orderCount = r.orderCount;
                    this.leaderHasBuy = r.leaderHasBuy;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.groupInfo = {...r.groupInfo};
                    this.countDownSenconds = r.countDownSenconds;
                }).catch(_=>{});
            },
            leaderPay(){
                // 支付成功后执行的回调

                leaderActivity({activityId:window.actId}).then(res=>{
                    this.orderCount = res.orderCount;
                    this.leaderHasBuy = res.leaderHasBuy;
                    this.goodsInfo = {...res.goodsInfo};
                    this.activity = {...res.activity};
                    this.groupInfo = {...res.groupInfo};
                    this.countDownSenconds = res.countDownSenconds;
                    this.shareFriend()
                    // 支付成功后跳转至拼团页

                    window.location.href = 'https://hsj.hulian120.com/pay/groupBuy.html?groupId='+this.groupInfo.id + '&leaderId=' + this.groupInfo.leaderId+'&actId=' + window.actId + '&status=' + this.groupInfo.status



                }).catch(_=>{});
            },
            wxPay(mobile){

                creatLeaderOrder({
                    activityId: window.actId,
                    groupId:this.groupInfo.id,
                    mobile:mobile,
                    recommenderUserId:window.URLPARAMS.recommenderUserId
                }).then(r=>{
                    this.showMobile = false
                    vxPay(r,this.leaderPay)
                }).catch(_=>{})
            },
            openGroup(){
                this.share = true;
                crtGroupOpen({
                    activityId: window.actId,
                    groupId: this.groupInfo.id,
                    recommenderUserId: window.URLPARAMS.recommenderUserId
                }).then(r=>{
                    leaderActivity({activityId:window.actId}).then(res=>{
                        this.orderCount = res.orderCount;
                        this.leaderHasBuy = res.leaderHasBuy;
                        this.goodsInfo = {...res.goodsInfo};
                        this.activity = {...res.activity};
                        this.groupInfo = {...res.groupInfo};
                        this.countDownSenconds = res.countDownSenconds;


                        this.shareFriend()


                    }).catch(_=>{});
                }).catch(_=>{})
            },
            timeOut(){
                leaderActivity({activityId:window.actId}).then(r=>{
                    this.orderCount = r.orderCount;
                    this.leaderHasBuy = r.leaderHasBuy;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.groupInfo = {...r.groupInfo};
                    this.countDownSenconds = r.countDownSenconds;
                    this.shareFriend()
                }).catch(_=>{});
            },

        },
        mounted() {




        },
        beforeDestroy: function () {

        },
        components: {Popup,Button,PayPopup,Share,Countdown}
    }
</script>
<style>

</style>