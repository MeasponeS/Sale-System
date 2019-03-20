<template>
    <div id="app">
        <img class="topImg" :src="activity.imageUrl" alt="">
        <div class="title">
            <img src="./img/long.png" alt="">
        </div>
        <div class="top">
            <div class="goods">
                <h3>本次拼团商品</h3>
                <div class="good">
                    <div class="goodsName">
                        <h3>{{goodsInfo.name || '无'}}</h3>
                        <span>{{activity.minCount || 0  }}人可成团</span>
                    </div>
                    <div class="goodsPrice">
                        <span>拼团价{{goodsInfo.sellPrice || 0   | Money}}</span>
                        <em>省{{goodsInfo.saveMoney || 0   | Money}}</em>
                        <strong>价格 <span>{{goodsInfo.originPrice || 0   | Money}}</span></strong>
                        <strong class="countNum">已有{{orderCount || 0  }}人成团</strong>
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
                <img :src="goodsInfo.imageUrl" alt="" >
            </div>
        </div>
        <div class="start" @click="showOpen = true" v-if="groupInfo && groupInfo.status == 0">
           我要开团
        </div>
        <div class="start" @click="showOpen = true" v-else>
            查看团详情
        </div>
        <div class="end" >
            <h3>本次活动已结束</h3>
        </div>
        <div class="income" @click="goIncome">
            <img src="./img/2.png" alt="">
        </div>
        <Popup v-model="showOpen" :close-on-click-overlay="false">
            <div class="wrap">
                <h3 @click="goGroupBuy">开团方式</h3>
                <Button class="indexBtn"
                        @click="goCheckMobile"
                        :disabled="!groupInfo || !groupInfo.status == 0"
                >A：购买商品，并成为团长</Button>
                <Button class="indexBtn" @click="share = true" >B：通过邀请好友成为团长</Button>
                <Button class="bottomBtn" @click="showOpen = false">取消</Button>
            </div>
        </Popup>
        <PayPopup :showMobile="showMobile" @closePay="showMobile = false " @wxPay="wxPay"></PayPopup>
        <Share :share="share" @know="know"></Share>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {leaderActivity} from "../../api/activity";
    import Config from '../../config/app'
    import {Popup,Button} from 'vant';
    import PayPopup from '../../components/PayPopup'
    import Share from '../../components/Share'
    import {creatLeaderOrder} from "../../api/order";
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
                groupInfo:{}
            }
        },
        filters:{
            Money:function(value){
                return '￥'+ parseInt(value)/100
            }
        },
        methods: {
            goGroupBuy(){

                window.location.href = './groupBuy.html?id='+this.groupInfo.id + '&status=' + this.groupInfo.status
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
                this.share = false
            },
            wxPay(mobile){
                creatLeaderOrder({
                    activityId: Config.activityId,
                    groupId:this.groupInfo.id,
                    mobile:mobile,
                    recommenderUserId:window.URLPARAMS.id
                }).then(r=>{
                    console.log(r);
                }).catch(_=>{})
            }
        },
        mounted() {
            leaderActivity({activityId:Config.activityId}).then(r=>{
                this.orderCount = r.orderCount;
                this.leaderHasBuy = r.leaderHasBuy;
                this.goodsInfo = {...r.goodsInfo};
                this.activity = {...r.activity};
                this.groupInfo = {...r.groupInfo}
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {Popup,Button,PayPopup,Share}
    }
</script>
<style>

</style>