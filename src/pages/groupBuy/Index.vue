<template>
    <div id="app">
        <h3 class="normal" v-if="groupInfo.status==1">拼团中</h3>
        <h3 class="fail" v-if="groupInfo.status==3">拼团失败</h3>
        <h3 class="success" v-if="groupInfo.status==2">拼团成功</h3>
        <div class="goods">
            <img :src="activity.imageUrl" alt="">
            <div class="desc">
                <div class="title">
                    <h3>{{goodsInfo.name}}<span>{{activity.minCount || 0  }}人可成团</span></h3>
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
                <div class="box" :class="className(1)">返￥{{regularLIst[1].rebateMoney}}</div>
                <div class="line" :class="className2(1)"></div>
                <div class="box" :class="className(2)">返￥{{regularLIst[2].rebateMoney}}</div>
                <div class="line" :class="className2(2)"></div>
                <div class="box" :class="className(3)">返￥{{regularLIst[3].rebateMoney}}</div>

            </div>
            <div class="progressNum">
                <div v-for="(item,index) in regularLIst" :class="className1(index)">{{item.content}}</div>
            </div>
        </div>
        <div class="groupDetails">
            <h3>距结束只剩 <Countdown :second="countDownSenconds" @toggle="countDownSenconds--" @end="timeOut"></Countdown> </h3>
            <div class="groupMember">
                <div class="groupLeader">
                    <img src="./img/2.jpg" alt="">
                    <span>团长</span>
                </div>
                <div class="groupFriends">
                    <div class="emptyI">?</div>
                    <!--<img style="right:0" src="./img/7.jpg" alt="">-->
                    <!--<img style="right:18px" src="./img/3.jpg" alt="">-->
                    <!--<img style="right:36px" src="./img/5.jpg" alt="">-->
                    <!--<img style="right:54px" src="./img/6.jpg" alt="">-->
                    <!--<img style="right:72px" src="./img/1.jpg" alt="">-->
                </div>
            </div>
            <Button class="indexBtn" @click="showMobile = true" v-if="!isLeader && !userHasBuy" >一键参团 {{goodsInfo.originPrice || 0   | Money}}</Button>
            <Button class="indexBtn" v-else>邀请好友团购，拿更高返利</Button>
            <Button class="indexBtn endBtn">团购已结束</Button>
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
            <img :src="goodsInfo.imageUrl" alt="">
        </div>
        <div class="income" @click="goIncome">
            <img src="./img/2.png" alt="">
        </div>
        <PayPopup :showMobile="showMobile" @closePay="showMobile = false" @wxPay="wxPay"></PayPopup>
        <Share :share="share" @know="know"></Share>
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
    import Config from '../../config/app'
    import {creatGeneralOrder} from "../../api/order";
    import Share from '../../components/Share'
    export default {
        name: 'app',
        mixins:[groupProgress,CommonMixin],
        data: function () {
            return {
                showMobile:false,
                active:-1,
                groupNum:'',
                goodsInfo: {},
                activity:{},
                groupInfo:{},   // 团信息
                leaderHeadImg:'', // 团长头像
                headList:{}, // 团员头像
                regularLIst:[],
                countDownSenconds:'',
                isLeader:'',
                userHasBuy:''
            }
        },
        filters:{
            Money:function(value){
                return '￥'+ parseInt(value)/100
            }
        },
        methods: {
            goIncome(){
                window.location.href = './incomeDetails.html'
            },
            timeOut(){

            },
            wxPay(mobile){
                creatGeneralOrder({
                    activityId: Config.activityId,
                    groupId:this.groupInfo.id,
                    mobile:mobile,
                }).then(r=>{
                    console.log(r);
                }).catch(_=>{})
            }
        },
        mounted() {

            this.id = getUrlInfo('id');
            userActivity({groupId:this.id}).then(r=>{
                this.groupNum = r.orderCount;
                this.countDownSenconds = r.countDownSenconds;
                this.leaderHasBuy = r.leaderHasBuy;
                this.goodsInfo = {...r.goodsInfo};
                this.activity = {...r.activity};
                this.groupInfo = {...r.groupInfo};
                this.regularLIst = r.regularLIst;

            }).catch(_=>{})




        },
        beforeDestroy: function () {

        },
        components: {Button,Steps,Step,Popup,Countdown,PayPopup,Share}
    }
</script>
<style>

</style>