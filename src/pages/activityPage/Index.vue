<template>
    <div>
        <div v-show="goodsInfo.sellPrice">
            <div id="app">
                <div >
                    <img class="topImg" :src="activity.imageUrl" alt="">
                    <div class="title">
                        <img src="./img/long.png" alt="">
                    </div>
                    <div class="top">
                        <div class="goods" @click="goMyGroup">
                            <div class="good">
                                <div class="goodsName">
                                    <h3>{{goodsInfo.name || '无'}}</h3>
                                    <span>{{activity.minCount || 0  }}人可成团</span>
                                </div>
                                <div class="goodsPrice">
                                    <span style="font-weight: bold">拼团价{{goodsInfo.sellPrice || 0   | Money}}</span>
                                    <em>省{{goodsInfo.saveMoney || 0   | Money}}</em>
                                    <strong>原价<span>{{goodsInfo.originPrice || 0   | Money}}</span></strong>
                                    <strong class="countNum">当前团已有{{orderCount || 0  }}人成团</strong>
                                </div>
                            </div>
                        </div>
                        <div v-if="kolStatus == 0 && quickGroupList.length > 0">
                            <RollNotice autoplay="3000"
                                        height="50"
                                        class="quickGroup"
                            >
                                <RollNoticeItem v-for="(item) in quickGroupList" >
                                    <a class="roll" :href="'./groupBuy.html?groupId='+item.groupId">
                                        <img :src="item.leaderHeadUrl" alt="">
                                        <h3>
                                            <span class="quickName">{{item.leaderName}}</span>
                                            <span class="quickNum">的团还差{{item.surplusCount}}人</span>
                                        </h3>
                                        <span class="right" >快速参团</span>
                                    </a>
                                </RollNoticeItem>
                            </RollNotice>
                        </div>


                        <div class="rules" v-if="kolStatus == 0" >
                            <h3>活动玩法</h3>
                            <span>开团  -  邀请好友  -  6小时内成团 -发货</span>
                            <span class="ruleHeader">用户参与团购的具体玩法：</span>
                            <span>1.点击链接进入商品详情，通过购买入口进入订单支付页，用户付款成功后，按页面提示邀好友一起学习</span>
                            <span>2.支付人数在团购有效时间内达到门槛值，即成团；成团后有效时间内仍可以继续参团，达到团购结束时间后，团购结束。</span>
                            <span>3.团单成功，订单进入发学习卡流程；团单失败，订单全额退款。</span>
                            <span class="ruleHeader">参与限制：</span>
                            <span>1.成团人数（包含团长）至少3人</span>
                            <span>2.一名团长一次只能开一个团，已有团购结束方可开第二个团</span>
                            <span class="ruleHeader">取消规则</span>
                            <span>未成团时不可主动取消订单</span>
                        </div>
                        <div class="goodDetails " id="scroll" >
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


                    <!--<div class="end" v-if="countDownSenconds == 0" >-->
                    <!--<h3>本次活动已结束</h3>-->
                    <!--</div>-->

                </div>

            </div>
            <div class="income" @click="goIncome" v-if="kolStatus == 1">
                <img src="./img/2.png" alt="">
            </div>
            <Popup v-model="showOpen" :close-on-click-overlay="false" position="bottom">
                <div class="wrap">
                    <h3>开团方式（二选一）</h3>
                    <div class="indexBtn"
                         @click="goCheckMobile"
                    >
                        A：立即购买并分享链接，成为团长
                        <!--<span class="btnWord">*支付成功后，团购开始倒计时</span>-->
                    </div>
                    <div class="indexBtn" @click="openGroup">
                        B：直接分享购买链接给好友，成为团长
                        <!--<span class="btnWord">*点击该按钮，团购开始倒计时</span>-->
                    </div>
                    <Button class="bottomBtn" @click="showOpen = false">取消</Button>
                </div>
            </Popup>
            <Share :share="share" @know="know"></Share>
            <PayPopup :showMobile="showMobile" @closePay="showMobile = false " @wxPay="wxPay" ></PayPopup>
            <div class="start" @click="shareToFriend" v-if="groupInfo.status && groupInfo.status == 1 && countDownSenconds && countDownSenconds >= 0">
                邀请好友参团
                <h4><Countdown :second="countDownSenconds" :status="groupInfo.status" @toggle="countDownSenconds--" @end="timeOut" style="display: block"></Countdown></h4>
            </div>
            <div class="start" @click="openAllGroup" v-else>
                我要开团
            </div>
        </div>
        <div v-show="!goodsInfo.sellPrice" id="loading">
            <img src="../../assets/loading.gif" alt="">
        </div>
    </div>


</template>

<script>
    import BScroll from 'better-scroll'
    import CommonMixin from '../commonMixin.js'
    import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice';
    import {leaderActivity,quickGroupList} from "../../api/activity";
    import {Popup,Button,Toast} from 'vant';
    import PayPopup from '../../components/PayPopup'
    import Share from '../../components/Share'
    import {creatLeaderOrder} from "../../api/order";
    import {crtGroupOpen} from "../../api/group";
    import {vxPay,shareFriend,shareFriendQ} from '../../utils/weixin'
    import Countdown from '../../components/Countdown'
    import {accessLog} from "../../utils/app";
    import Config from '../../config/app'
    import {wxQueryOrder} from "../../api/order";
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
                kolStatus:'',      // 是否为kol团长或普通团长+
                quickGroupList:[],   // 快速参团列表
                timer:''
            }
        },
        filters:{
            Money:function(value){
                return '￥'+ parseInt(value)/100
            }
        },
        methods: {
            goMyGroup(){
                if((this.groupInfo.status == 1 || this.groupInfo.status == 2) && this.groupInfo.id != null){
                    clearInterval(window.Countdown)
                    window.location.href = './groupBuy.html?groupId='+this.groupInfo.id + '&leaderId=' + this.groupInfo.leaderId+'&actId=' + window.actId + '&status=' + this.groupInfo.status + '&sellId=' + window.URLPARAMS.sellId || -1
                } else {
                    console.log('======');
                }
            },

            shareToFriend(){
                this.share = true;
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id || '',
                    pageUrl:'/pages/activityPage.html',
                    pageName:'活动主页',
                    clickEvent:'点击分享好友开团',
                    clickEventName:'分享好友开团'
                };
                accessLog(reportLog);
            },
            openAllGroup(){
                if(this.kolStatus == 0){
                    this.showMobile = true
                } else {
                    this.showOpen = true;
                }
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id || '',
                    pageUrl:'/pages/activityPage.html',
                    pageName:'活动主页',
                    clickEvent:'点击我要开团',
                    clickEventName:'我要开团'
                };
                accessLog(reportLog);
            },
            shareFriend(){
                let config = {
                    shareTitle:'我已领取团购优惠，你也来吧',
                    shareBody:'健康管理师＆护理评估师，现在团购立减¥880',
                    shareUrl:Config.shareUrl +'groupBuy.html?groupId='+this.groupInfo.id + '&leaderId=' + this.groupInfo.leaderId+'&actId=' + window.actId + '&status=' + this.groupInfo.status + '&sellId=' + window.URLPARAMS.sellId || -1,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };
                shareFriend(config)
                shareFriendQ(config)
            },
            wxSignatureCallback(){
                leaderActivity({activityId:window.actId,kolStatus:this.kolStatus}).then(r=>{
                    this.leaderHasBuy = r.leaderHasBuy;
                    if(r.groupInfo.kolStatus == this.kolStatus){
                        this.groupInfo = {...r.groupInfo};
                        if(r.groupInfo.status == 0){
                            this.orderCount = 0
                        } else {
                            this.orderCount = r.orderCount;
                        }
                        if((this.groupInfo.status == 1 || this.groupInfo.status == 2) && this.groupInfo.id != null ){
                            this.shareFriend()
                        }
                    }
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.countDownSenconds = r.countDownSenconds;
                    this.quickGroupList = r.quickGroupList || [];
                    let reportLog = {
                        activityId:window.actId,
                        groupId:this.groupInfo.id || '',
                        pageUrl:'/pages/activityPage.html',
                        pageName:'活动主页',
                        clickEvent:'',
                        clickEventName:''
                    };
                    accessLog(reportLog);

                }).catch(_=>{});

            },
            goIncome(){
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id || '',
                    pageUrl:'/pages/activityPage.html',
                    pageName:'活动主页',
                    clickEvent:'点击查看活动收益',
                    clickEventName:'查看活动收益'
                };
                accessLog(reportLog);
                window.location.href = './incomeDetails.html?groupId='+ this.groupInfo.id || ''
            },
            goCheckMobile(){
                this.showOpen = false;
                this.showMobile = true;
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id || '',
                    pageUrl:'/pages/activityPage.html',
                    pageName:'活动主页',
                    clickEvent:'点击支付成为团长开团',
                    clickEventName:'支付成为团长开团开团'
                };
                accessLog(reportLog);
            },
            know(){
                this.showOpen = false;
                this.share = false;
                leaderActivity({activityId:window.actId,kolStatus:this.kolStatus}).then(r=>{
                    this.leaderHasBuy = r.leaderHasBuy;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    if(r.groupInfo.kolStatus == this.kolStatus){
                        this.groupInfo = {...r.groupInfo};
                        if(r.groupInfo.status == 0){
                            this.orderCount = 0
                        } else {
                            this.orderCount = r.orderCount;
                        }
                    }
                    this.quickGroupList = r.quickGroupList || [];
                    this.countDownSenconds = r.countDownSenconds;
                }).catch(_=>{});
            },
            leaderPay(r){
                // 支付成功后执行的回调

                wxQueryOrder({orderNum:r}).then(response=>{
                    console.log(response);
                });

                leaderActivity({activityId:window.actId,kolStatus:this.kolStatus}).then(res=>{
                    console.log(res);
                    this.leaderHasBuy = res.leaderHasBuy;
                    this.goodsInfo = {...res.goodsInfo};
                    this.activity = {...res.activity};
                    this.quickGroupList = res.quickGroupList || [];
                    if(res.groupInfo.kolStatus == this.kolStatus){
                        this.groupInfo = {...res.groupInfo};
                        if(res.groupInfo.status == 0){
                            this.orderCount = 0
                        } else {
                            this.orderCount = res.orderCount;
                        }
                    }
                    this.countDownSenconds = res.countDownSenconds;
                    this.shareFriend()
                    // 支付成功后跳转至拼团页
                    window.setTimeout(()=>{
                        console.log('马上跳转');
                        window.location.href = Config.shareUrl +'groupBuy.html?groupId='+this.groupInfo.id + '&leaderId=' + this.groupInfo.leaderId+'&actId=' + window.actId + '&status=' + this.groupInfo.status + '&sellId=' + window.URLPARAMS.sellId || -1
                    },1000)
                }).catch(_=>{});


            },
            wxPay(mobile){
                let reportLog = {
                    activityId:window.actId,
                    groupId:'',
                    pageUrl:'/pages/activityPage.html',
                    pageName:'活动主页',
                    clickEvent:'点击发起微信支付',
                    clickEventName:'发起微信支付'
                };
                accessLog(reportLog);
                creatLeaderOrder({
                    activityId: window.actId,
                    groupId:this.groupInfo.id,
                    mobile:mobile,
                    groupKolStatus:this.kolStatus,
                    recommenderUserId:(window.URLPARAMS.recommenderUserId || window.URLPARAMS.sellId) || -1
                }).then(r=>{
                    this.showMobile = false
                    vxPay(r,this.leaderPay)
                }).catch(_=>{})
            },
            openGroup(){
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id || '',
                    pageUrl:'/pages/activityPage.html',
                    pageName:'活动主页',
                    clickEvent:'点击分享好友开团',
                    clickEventName:'分享好友开团'
                };
                accessLog(reportLog);
                crtGroupOpen({
                    activityId: window.actId,
                    groupId: this.groupInfo.id,
                    groupKolStatus:this.kolStatus,
                    recommenderUserId: window.URLPARAMS.recommenderUserId
                }).then(r=>{
                    leaderActivity({activityId:window.actId,kolStatus:this.kolStatus}).then(res=>{
                        this.leaderHasBuy = res.leaderHasBuy;
                        this.goodsInfo = {...res.goodsInfo};
                        this.activity = {...res.activity};
                        if(res.groupInfo.kolStatus == this.kolStatus){
                            this.groupInfo = {...res.groupInfo};
                            if(res.groupInfo.status == 0){
                                this.orderCount = 0
                            } else {
                                this.orderCount = res.orderCount;
                            }
                        }
                        this.quickGroupList = res.quickGroupList || [];
                        this.countDownSenconds = res.countDownSenconds;

                        window.setTimeout(()=>{
                            window.location.href = './groupBuy.html?groupId='+this.groupInfo.id + '&leaderId=' + this.groupInfo.leaderId+'&actId=' + window.actId + '&status=' + this.groupInfo.status + '&sellId=' + window.URLPARAMS.sellId || -1
                        },1000)


                    }).catch(_=>{});
                }).catch(_=>{})
            },
            timeOut(){
                leaderActivity({activityId:window.actId,kolStatus:this.kolStatus}).then(r=>{
                    this.leaderHasBuy = r.leaderHasBuy;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    if(r.groupInfo.kolStatus == this.kolStatus){
                        this.groupInfo = {...r.groupInfo};
                        if(r.groupInfo.status == 0){
                            this.orderCount = 0
                        } else {
                            this.orderCount = r.orderCount;
                        }
                    }
                    this.quickGroupList = r.quickGroupList || [];
                    this.countDownSenconds = r.countDownSenconds;
                    this.shareFriend()
                }).catch(_=>{});
            },
            updateList(){
                let time = this.quickGroupList.length === 0? 2500:this.quickGroupList.length * 3000 - 500;
                if(this.kolStatus == 0){
                    quickGroupList({activityId:window.actId}).then(r=>{
                        if(this.quickGroupList.length > 0){
                            if(this.quickGroupList[this.quickGroupList.length -1].groupId == r[0].groupId){
                                r.push(r[0])
                                r.shift()
                            }
                        }
                        this.quickGroupList = []
                        this.$nextTick(_=>{
                            // this.$set(this,'quickGroupList',r)
                            this.quickGroupList = r || []
                        })
                        this.timer = setTimeout(()=>{
                            this.updateList()
                        },time)
                    }).catch(_=>{})
                }
            }
        },
        mounted() {




            let wrapper = document.querySelector('#app')
            const options = {

                click: true,

                taps: true

            };
            let scroll = new BScroll(wrapper,options)



            this.kolStatus = window.URLPARAMS.kolStatus;
            let that = this;
            document.addEventListener("visibilitychange",function(){

                if(document.visibilityState=="hidden"){
                    clearInterval(window.Countdown)
                    clearTimeout(this.timer)
                    //do something else
                    //计时器罢工
                }



                if(document.visibilityState=="visible"){
                    leaderActivity({activityId:window.actId,kolStatus:that.kolStatus}).then(r=>{
                        that.leaderHasBuy = r.leaderHasBuy;
                        that.goodsInfo = {...r.goodsInfo};
                        that.activity = {...r.activity};
                        if(r.groupInfo.kolStatus == this.kolStatus){
                            that.groupInfo = {...r.groupInfo};
                            if(r.groupInfo.status == 0){
                                that.orderCount = 0
                            } else {
                                that.orderCount = r.orderCount;
                            }
                        }
                        this.quickGroupList = r.quickGroupList || [];
                        that.countDownSenconds = r.countDownSenconds;
                        that.shareFriend()
                    }).catch(_=>{});
                }

            })


            leaderActivity({activityId:window.actId,kolStatus:that.kolStatus}).then(r=>{
                this.leaderHasBuy = r.leaderHasBuy;
                this.goodsInfo = {...r.goodsInfo};
                this.activity = {...r.activity};
                if(r.groupInfo.kolStatus == this.kolStatus){
                    this.groupInfo = {...r.groupInfo};
                    if(r.groupInfo.status == 0){
                        this.orderCount = 0
                    } else {
                        this.orderCount = r.orderCount;
                    }
                }
                this.countDownSenconds = r.countDownSenconds;
                this.quickGroupList = r.quickGroupList || [];
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id || '',
                    pageUrl:'/pages/activityPage.html',
                    pageName:'活动主页',
                    clickEvent:'',
                    clickEventName:''
                };
                accessLog(reportLog);
                if((this.groupInfo.status == 1 || this.groupInfo.status == 2 ) && this.groupInfo.id != null ){
                    this.shareFriend()
                }
            }).catch(_=>{});

            this.updateList()







        },
        beforeDestroy: function () {
        },
        components: {Popup,Button,PayPopup,Share,Countdown,RollNotice,RollNoticeItem}
    }
</script>
<style>

</style>