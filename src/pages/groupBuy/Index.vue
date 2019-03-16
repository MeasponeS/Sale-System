<template>
    <div id="app">
        <h3 class="normal" v-if="status=='doing'">拼团中</h3>
        <h3 class="fail" v-if="status=='fail'">拼团失败</h3>
        <h3 class="success" v-if="status=='success'">拼团成功</h3>
        <div class="goods">
            <img src="./img/2.jpg" alt="">
            <div class="desc">
                <div class="title">
                    <h3>健康管理师+护理评估师 还可以看看看看<span>2人可成团</span></h3>
                </div>
                <div class="price">
                    价格
                    <span>￥4860</span>
                </div>
                <div class="sale">
                    <span>￥3383</span>
                    <span>省 ￥1147</span>
                </div>
            </div>
        </div>
        <div class="groupProgress">
            <h3>当前有<span>{{groupNum}}</span>人参团，倒计时结束48小时后：</h3>
            <div class="progress">
                <div class="box">不返利</div>
                <div class="line"></div>
                <div class="box">返￥200</div>
                <div class="line"></div>
                <div class="box">返￥300</div>
                <div class="line"></div>
                <div class="box">返￥400</div>
            </div>
            <div class="progressNum">
                <div>少于2人参团</div>
                <div>2-5人参团</div>
                <div>6-9人参团</div>
                <div>9人以上参团</div>
            </div>
        </div>
        <div class="groupDetails">
            <h3>距结束只剩 <span>00</span> : <span>00</span> : <span>00</span> </h3>
            <div class="groupMember">
                <div class="groupLeader">
                    <img src="./img/2.jpg" alt="">
                    <span>团长</span>
                </div>
                <div class="groupFriends">
                    <img style="right:0" src="./img/7.jpg" alt="">
                    <img style="right:18px" src="./img/3.jpg" alt="">
                    <img style="right:36px" src="./img/5.jpg" alt="">
                    <img style="right:54px" src="./img/6.jpg" alt="">
                    <img style="right:72px" src="./img/1.jpg" alt="">
                </div>
            </div>
            <Button class="indexBtn">一键参团 ￥520</Button>
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
            <img src="./img/4.jpg" alt="">
        </div>
        <div class="income" @click="goIncome">
            <img src="./img/2.png" alt="">
        </div>
    </div>
</template>

<script>
    import {Button,Steps,Step} from 'vant'
    import groupProgress from "./groupProgress";
    import CommonMixin from '../commonMixin.js'
    import {userActivity} from "../../api/activity";
    export default {
        name: 'app',
        mixins:[groupProgress,CommonMixin],
        data: function () {
            return {
                status:'success',
                active:-1,
                groupNum:10
            }
        },
        methods: {
            goIncome(){
                window.location.href = './incomeDetails.html'
            }
        },
        mounted() {
            userActivity({groupId:1}).then(r=>{

            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {Button,Steps,Step}
    }
</script>
<style>

</style>