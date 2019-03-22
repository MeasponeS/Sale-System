<template>
    <div id="app">
        <h3 class="normal" v-if="groupInfo.status==1">拼团中</h3>
        <h3 class="fail" v-if="groupInfo.status==3">拼团失败</h3>
        <h3 class="success" v-if="groupInfo.status==2">拼团成功</h3>
        <div class="goods">
            <img :src="activity.imageUrl" alt="">
            <div class="desc">
                <div class="title">
                    <h3>{{goodsInfo.name}}<span style="display: block">{{activity.minCount || 0  }}人可成团</span></h3>
                </div>
                <div class="price">
                    价格
                    <span>{{goodsInfo.sellPrice || 0   | Money}}</span>
                </div>
                <div class="sale">
                    <span>{{goodsInfo.originPrice || 0   | Money}}</span>
                    <span>省 {{goodsInfo.saveMoney || 0   | Money}}</span>
                </div>
            </div>
        </div>
        <div class="groupProgress">
            <h3>当前有<span>{{ groupNum || 0}}</span>人参团，倒计时结束48小时后：</h3>
            <div class="progress">
                <div class="box" :class="className(0)">不返利</div>
                <div class="line" :class="className2(0)"></div>
                <!--<div class="box" :class="className(1)">返￥{{regularLIst[1].rebateMoney}}</div>-->
                <div class="box" :class="className(1)">返￥200</div>
                <div class="line" :class="className2(1)"></div>
                <!--<div class="box" :class="className(2)">返￥{{regularLIst[2].rebateMoney}}</div>-->
                <div class="box" :class="className(2)">返￥300</div>
                <div class="line" :class="className2(2)"></div>
                <!--<div class="box" :class="className(3)">返￥{{regularLIst[3].rebateMoney}}</div>-->
                <div class="box" :class="className(3)">返￥400</div>

            </div>
            <div class="progressNum">
                <div v-for="(item,index) in regularLIst" :class="className1(index)">{{item.content}}</div>
            </div>
        </div>
        <div class="groupDetails">
            <h3>距结束只剩 <Countdown :second="countDownSenconds"  @end="timeOut"></Countdown> </h3>
            <div class="groupMember">
                <div class="groupLeader">
                    <img :src="leaderHeadImg" alt="">
                    <span>团长</span>
                </div>
                <div class="groupFriends">
                    <div class="emptyI" v-if="headList[0] == null" style="margin-left:-72px">?</div>
                    <img
                            v-else
                            alt=""
                            v-for="(item,index) in headList"
                            :src="item"
                            :style="'right:'+(index *18) + 'px'"
                    >
                </div>
            </div>
            <div v-if="countDownSenconds > 0">
                <Button class="indexBtn" @click="showMobile = true" v-if="isLeader == '0' && userHasBuy == '0'" >一键参团 {{goodsInfo.originPrice || 0   | Money}}</Button>
                <Button class="indexBtn" v-else @click="share = true">邀请好友团购，拿更高返利</Button>
            </div>
            <Button class="indexBtn endBtn" v-if="countDownSenconds <= 0 && groupInfo.status != 3" >团购已结束</Button>
            <Button class="indexBtn endBtn" v-if="countDownSenconds <= 0 && groupInfo.status == 3">请联系团长重新开团</Button>
            <em>好友拼团·人满发货·不满退款</em>
        </div>
        <div class="playGuide">
            <h3>玩法说明</h3>
            <Steps :active="active">
                <Step>开团</Step>
                <Step>邀请好友</Step>
                <Step>6小时内成团</Step>
                <Step>发货</Step>
            </Steps>
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
</template>

<script>
    import {Button,Steps,Step,Popup} from 'vant'
    import groupProgress from "./groupProgress";
    import CommonMixin from '../commonMixin.js'
    import {userActivity} from "../../api/activity";
    import {getUrlInfo} from "../../utils/dataStorage";
    import Countdown from '../../components/Countdown'
    import PayPopup from '../../components/PayPopup';
    import {vxPay,shareFriendQ,shareFriend} from "../../utils/weixin";
    import {creatGeneralOrder} from "../../api/order";
    import Share from '../../components/Share'
    export default {
        name: 'app',
        mixins:[groupProgress,CommonMixin],
        data: function () {
            return {
                showMobile:false,
                active:-1,
                share:false,
                groupNum:'',
                goodsInfo: {},
                activity:{},
                groupInfo:{},   // 团信息
                leaderHeadImg:'', // 团长头像
                headList:[], // 团员头像
                regularLIst:[],
                countDownSenconds:0,
                isLeader:'',
                userHasBuy:'',
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
                    shareUrl:'https://hsj.hulian120.com/pay/groupBuy.html?groupId='+window.URLPARAMS.groupId + '&leaderId=' + window.URLPARAMS.leaderId+'&actId=' + window.actId + '&status=' + window.URLPARAMS.status,
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
                    this.regularLIst = r.regularLIst;
                    this.headList = r.headList.reverse();
                    this.leaderHeadImg = r.leaderHeadImg;
                    this.userHasBuy = r.userHasBuy;

                    this.shareFriend();
                }).catch(_=>{})
            },
            timeOut(){
                this.countDownSenconds = 0;
                window.setTimeout(()=>{
                    window.location.href = 'https://hsj.hulian120.com/pay/groupBuy.html?groupId='+window.URLPARAMS.groupId + '&leaderId=' + window.URLPARAMS.leaderId+'&actId=' + window.actId + '&status=' + window.URLPARAMS.status
                },1000)
            },
            userBuy(){
                setTimeout(()=>{
                    window.location.href = 'https://hsj.hulian120.com/pay/groupBuy.html?groupId='+window.URLPARAMS.groupId + '&leaderId=' + window.URLPARAMS.leaderId+'&actId=' + window.actId + '&status=' + window.URLPARAMS.status + '&pay=1'
                },300)
            },
            wxPay(mobile){
                creatGeneralOrder({
                    activityId: window.actId,
                    groupId:this.groupInfo.id,
                    mobile:mobile,
                }).then(r=>{
                    vxPay(r,this.userBuy)
                }).catch(_=>{})
            },

            className(step){
                let num = this.groupNum;
                let list = this.regularLIst;
                if(list.length == 0 || num == null){
                    return
                }
                switch (step) {
                    case 0:
                        if(num <= list[0].highCount){
                            return 'active'
                        } else {
                            return ''
                        };
                        break;
                    case 1:
                        if(num <= list[0].highCount){
                            return 'unActive'
                        } else if(num >= list[1].lowCount && num <= list[1].highCount){
                            return 'active'
                        } else {
                            return ''
                        };
                        break;
                    case 2:
                        if(num <= list[0].highCount){
                            return 'unActive'
                        } else if(num >= list[1].lowCount && num <= list[1].highCount){
                            return 'unActive'
                        } else if(num >= list[2].lowCount && num <= list[2].highCount){
                            return 'active'
                        } else {
                            return ''
                        };
                        break;
                    case 3:
                        if(num <= list[0].highCount){
                            return 'unActive'
                        } else if(num >= list[1].lowCount && num <= list[1].highCount){
                            return 'unActive'
                        } else if(num >= list[2].lowCount && num <= list[2].highCount){
                            return 'unActive'
                        } else {
                            return 'active'
                        }
                }

            },

            className1(step){
                let num = this.groupNum;
                let list = this.regularLIst;
                if(list.length == 0 || num == null){
                    return
                }
                switch (step) {
                    case 0:
                        if(num <= list[0].highCount){
                            return 'numActive'
                        }
                        break;
                    case 1:
                        if(num >= list[1].lowCount && num <= list[1].highCount){
                            return 'numActive'
                        }
                        break;
                    case 2:
                        if(num >= list[2].lowCount && num <= list[2].highCount){
                            return 'numActive'
                        }
                        break;
                    case 3:
                        if(num >= list[3].lowCount){
                            return 'numActive'
                        }
                }
            },

            className2(step){
                let num = this.groupNum;
                let list = this.regularLIst;
                if(list.length == 0 || num == null){
                    return
                }
                switch (step) {
                    case 0:
                        if(num <= list[0].highCount){
                            return ''
                        } else {
                            return 'lineActive'
                        }
                        break;
                    case 1:
                        if(num >= list[2].lowCount ){
                            return 'lineActive'
                        }
                        break;
                    case 2:
                        if(num >= list[3].lowCount){
                            return 'lineActive'
                        }
                }
            },




        },
        mounted() {
            this.id = getUrlInfo('groupId');

        },
        beforeDestroy: function () {

        },
        components: {Button,Steps,Step,Popup,Countdown,PayPopup,Share}
    }
</script>
<style>

</style>