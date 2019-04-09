<template>
    <div id="app">
        <div v-if="goodsInfo.sellPrice">
            <h3 class="normal" v-if="groupInfo.status==1">拼团中</h3>
            <h3 class="fail" v-if="groupInfo.status==3">拼团失败</h3>
            <h3 class="success" v-if="groupInfo.status==2">拼团成功</h3>


            <div class="groupDetails">
                <h3>距结束只剩 <Countdown :second="countDownSenconds"  @end="timeOut" :status="groupInfo.status"></Countdown> </h3>
                <div class="groupMember">
                    <div class="groupLeader">
                        <img :src="leaderHeadImg" alt="">
                        <span>团长</span>
                    </div>
                    <div class="groupFriends">
                        <div class="emptyI" v-if="headList=='' || !headList[0]" style="margin-left:-72px">?</div>
                        <img
                                v-else
                                alt=""
                                v-for="(item,index) in headList"
                                :src="item"
                                :style="'right:'+(index *18) + 'px'"
                        >
                    </div>
                </div>
                <h3 class="ad">就差你了，参团购买可省￥880</h3>
                <div v-if="countDownSenconds > 0">
                    <Button class="indexBtn" @click="inGroup" v-if="isLeader == '0' && userHasBuy == '0'" >一键参团 {{goodsInfo.sellPrice || 0   | Money}}</Button>
                    <Button class="indexBtn" v-else @click="shareToFriend">邀请好友拼团</Button>
                </div>
                <Button class="indexBtn endBtn" v-if="countDownSenconds <= 0 && groupInfo.status != 3" >团购已结束</Button>
                <Button class="indexBtn endBtn" v-if="countDownSenconds <= 0 && groupInfo.status == 3 && groupInfo.kolStatus == 1">请联系团长重新开团</Button>
                <Button class="indexBtn"
                        v-if="countDownSenconds <= 0 && groupInfo.status == 3 && groupInfo.kolStatus == 0"
                        @click="restartGroup"
                >重新开团</Button>
                <em>好友拼团·成团发货·<a href="./tuikuan.html">未成团退款</a></em>
            </div>
            <div class="playGuide">
                <h3>玩法说明</h3>
                <div class="topPlay">
                    <div class="ball"></div>
                    <div class="ballLine"></div>
                    <div class="ball"></div>
                    <div class="ballLine"></div>
                    <div class="ball"></div>
                    <div class="ballLine"></div>
                    <div class="ball"></div>
                </div>
                <div class="bottomPlay">
                    <span>开团</span>
                    <span>邀请好友</span>
                    <span>6小时内成团</span>
                    <span>成团即发货</span>
                </div>
            </div>

            <div class="goods">
                <img :src="activity.imageUrl" alt="">
                <div class="desc">
                    <div class="title">
                        <h3>{{goodsInfo.name}}</h3>
                    </div>
                    <div class="price">
                        <span> 原价<em>{{goodsInfo.originPrice || 0   | Money}}</em></span>
                        <span class="getGroup">{{activity.minCount || 0  }}人可成团</span>
                    </div>
                    <div class="sale">
                        <span>{{goodsInfo.sellPrice || 0   | Money}}</span>
                        <span class="saveMoney">省 {{goodsInfo.saveMoney || 0   | Money}}</span>
                        <!--<strong class="countNum">已有{{orderCount || 0  }}人成团</strong>-->
                    </div>
                </div>
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
            <PayPopup :showMobile="showMobile" @closePay="showMobile = false" @wxPay="wxPay"></PayPopup>
            <Share :share="share" @know="share = false"></Share>
        </div>
        <div v-else id="loading">
            <img src="../../assets/loading.gif" alt="">
        </div>

    </div>
</template>

<script>
    import {Button,Popup} from 'vant'
    import groupProgress from "./groupProgress";
    import CommonMixin from '../commonMixin.js'
    import {userActivity} from "../../api/activity";
    import {getUrlInfo} from "../../utils/dataStorage";
    import Countdown from '../../components/Countdown'
    import PayPopup from '../../components/PayPopup';
    import {vxPay,shareFriendQ,shareFriend} from "../../utils/weixin";
    import {creatGeneralOrder} from "../../api/order";
    import Share from '../../components/Share'
    import {accessLog} from "../../utils/app";
    import Config from '../../config/app'
    export default {
        name: 'app',
        mixins:[CommonMixin],
        data: function () {
            return {
                showMobile:false,
                share:false,
                groupNum:'',
                goodsInfo: {},
                activity:{},
                groupInfo:{},   // 团信息
                leaderHeadImg:'', // 团长头像
                headList:[], // 团员头像
                countDownSenconds:0,
                isLeader:'',
                userHasBuy:'',
                orderCount:'',
            }
        },
        filters:{
            Money:function(value){
                return '￥'+ parseInt(value)/100
            }
        },
        methods: {
            restartGroup(){
                window.location.href = './activityPage.html?kolStatus=0&actId='+ window.actId
            },
            shareToFriend(){
                this.share = true
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id,
                    pageUrl:'/pages/groupBuy.html',
                    pageName:'拼团页',
                    clickEvent:'点击邀请好友参团',
                    clickEventName:'邀请好友参团'
                };
                accessLog(reportLog);
            },
            shareFriend(){
                let config = {
                    shareTitle:'『团购优惠』和好朋友一起领',
                    shareBody:'健康管理师＆护理评估师，现在团购立减¥880',
                    shareUrl:Config.shareUrl + 'groupBuy.html?groupId='+window.URLPARAMS.groupId + '&leaderId=' + window.URLPARAMS.leaderId+'&actId=' + window.actId + '&status=' + window.URLPARAMS.status,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };
                shareFriend(config)
                shareFriendQ(config)
            },
            wxSignatureCallback(){
                userActivity({groupId:this.id}).then(r=>{
                    this.groupNum = r.orderCount;
                    this.isLeader = r.isLeader;
                    this.countDownSenconds = r.countDownSenconds;
                    this.leaderHasBuy = r.leaderHasBuy;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.groupInfo = {...r.groupInfo};
                    this.orderCount = r.orderCount;
                    this.headList = r.headList;
                    this.leaderHeadImg = r.leaderHeadImg;
                    this.userHasBuy = r.userHasBuy;

                    this.headList = this.headList.filter(item=>item)

                    this.headList = this.headList.reverse()

                    let reportLog = {
                        activityId:window.actId,
                        groupId:this.groupInfo.id,
                        pageUrl:'/pages/groupBuy.html',
                        pageName:'拼团页',
                        clickEvent:'',
                        clickEventName:''
                    };
                    accessLog(reportLog);



                    this.shareFriend();
                }).catch(_=>{})
            },
            inGroup(){
                this.showMobile = true;
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id,
                    pageUrl:'/pages/groupBuy.html',
                    pageName:'拼团页',
                    clickEvent:'点击一键参团',
                    clickEventName:'一键参团'
                };
                accessLog(reportLog);

            },
            timeOut(){
                //alert('时间没了')
                // window.setTimeout(()=>{
                //     window.location.href = 'https://hsj.hulian120.com/pay/groupBuy.html?groupId='+window.URLPARAMS.groupId + '&leaderId=' + window.URLPARAMS.leaderId+'&actId=' + window.actId + '&status=' + window.URLPARAMS.status
                //  },1000)
                userActivity({groupId:this.id}).then(r=>{
                    this.groupNum = r.orderCount;
                    this.isLeader = r.isLeader;
                    this.countDownSenconds = r.countDownSenconds;
                    this.leaderHasBuy = r.leaderHasBuy;
                    this.goodsInfo = {...r.goodsInfo};
                    this.activity = {...r.activity};
                    this.orderCount = r.orderCount;
                    this.groupInfo = {...r.groupInfo};
                    this.regularLIst = r.regularLIst;
                    this.headList = r.headList;
                    this.leaderHeadImg = r.leaderHeadImg;
                    this.userHasBuy = r.userHasBuy;
                    this.headList = this.headList.filter(item=>item)

                    this.headList = this.headList.reverse()

                }).catch(_=>{})
            },
            userBuy(){
                setTimeout(()=>{
                    window.location.href = Config.shareUrl + 'groupBuy.html?groupId='+window.URLPARAMS.groupId + '&leaderId=' + window.URLPARAMS.leaderId+'&actId=' + window.actId + '&status=' + window.URLPARAMS.status + '&pay=1'
                },300)
            },
            wxPay(mobile){
                let reportLog = {
                    activityId:window.actId,
                    groupId:this.groupInfo.id,
                    pageUrl:'/pages/groupBuy.html',
                    pageName:'拼团页',
                    clickEvent:'点击发起微信支付',
                    clickEventName:'发起微信支付'
                };
                accessLog(reportLog);
                creatGeneralOrder({
                    activityId: window.actId,
                    groupId:this.groupInfo.id,
                    mobile:mobile,
                }).then(r=>{
                    this.showMobile = false
                    vxPay(r,this.userBuy)
                }).catch(_=>{})
            },




        },
        mounted() {
            let that = this
            this.id = getUrlInfo('groupId');
            document.addEventListener("visibilitychange",function(){

                if(document.visibilityState=="hidden"){
                    clearInterval(window.Countdown)
                    //do something else
                    //计时器罢工
                }

                if(document.visibilityState=="visible"){

                    userActivity({groupId:that.id}).then(r=>{
                        that.groupNum = r.orderCount;
                        that.isLeader = r.isLeader;
                        that.countDownSenconds = r.countDownSenconds;
                        that.leaderHasBuy = r.leaderHasBuy;
                        that.goodsInfo = {...r.goodsInfo};
                        that.activity = {...r.activity};
                        that.groupInfo = {...r.groupInfo};
                        that.regularLIst = r.regularLIst;
                        that.orderCount = r.orderCount;
                        that.headList = r.headList;
                        that.leaderHeadImg = r.leaderHeadImg;
                        that.userHasBuy = r.userHasBuy;

                        that.headList = that.headList.filter(item=>item)

                        that.headList = that.headList.reverse()

                        that.shareFriend();
                    }).catch(_=>{})
                }

            })

        },
        beforeDestroy: function () {

        },
        components: {Button,Popup,PayPopup,Share,Countdown}
    }
</script>
<style>

</style>