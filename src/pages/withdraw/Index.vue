<template>
    <div id="app">
        <div class="money">
            <span>账户余额</span>
            <span>{{income.surplusMoney || 0  |Money}}</span>
        </div>
        <div class="money">
            <span>申请中金额</span>
            <span>{{income.applyingMoney || 0  |Money}}</span>
        </div>
        <div class="money">
            <span>已提现金额</span>
            <span>{{income.withdrawMoney || 0  |Money}}</span>
        </div>
        <div class="money">
            <span>提现金额</span>
            <input type="number" placeholder="不能超过账户余额" @input="checkMoney" v-model="getMoney">
            <em @click="rulesShow = true"><img src="./img/green.png" alt=""></em>
        </div>
        <Button class="indexBtn" @click="withdraw" :disabled="!getMoney">提现</Button>
        <div class="money" @click="goDetails">
            <span>收支明细</span>
            <img src="./img/right.png" alt="">
        </div>
        <div class="money" @click="goRecords">
            <span>提现记录</span>
            <img src="./img/right.png" alt="">
        </div>
        <Popup v-model="rulesShow" :close-on-click-overlay="false">
            <div class="ruleBox">
                <h4>提现规则</h4>
                <span>1.每月1号结算上个月的提现申请，1-5个工作日到账</span>
                <span>2.一个自然月内累计申请提现金额≧800时，需按照国家税务规定缴纳相关税费</span>
                <span>3.如有任拨打客服电话400-8650-512</span>何疑问，请
                <span class="botSpan">最终解释权归护士加所有</span>
                <Button class="ruleBtn" @click="rulesShow = false">知道了</Button>
            </div>
        </Popup>
        <RealNameAuth :idShow="idShow" @submit="submit" @closeId="closeId"></RealNameAuth>
    </div>
</template>

<script>
    import {Button,Popup,Toast} from 'vant'
    import CommonMixin from '../commonMixin.js'
    import RealNameAuth from '../../components/RealNameAuth'
    import {activityReward,realNameAuth} from "../../api/activity";
    import Config from '../../config/app'
    import {withdraw} from "../../api/activity";
    import wx from 'weixin-js-sdk';
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                rulesShow:false,
                idShow:false,
                income:{},
                getMoney:''
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
                    shareTitle:'邀请人主页',
                    shareBody:'赶快进入主页参与活动吧',
                    shareUrl:'https://hsj.hulian120.com/pay/beforeLogin.html' ,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };

                wx.onMenuShareAppMessage({
                    title: config.shareTitle, // 分享标题
                    desc: config.shareBody, // 分享描述
                    link: config.shareUrl, // 分享链接
                    imgUrl: config.shareImg, // 分享图标
                    //type: '', // 分享类型,music、video或link，不填默认为link
                    //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        console.log('配置分享成功');
                    },
                    cancel: function () {
                        console.log('配置分享失败');
                    }
                });

                wx.onMenuShareTimeline({
                    title: config.shareTitle, // 分享标题
                    link: config.shareUrl, // 分享链接
                    imgUrl: config.shareImg, // 分享图标
                    success: function () {
                        console.log('配置分享成功');
                    },
                    cancel: function () {
                        console.log('配置分享失败');
                    }
                });


            },
            checkMoney(){
                // 提现金额输入极值
                if(this.getMoney > this.income.surplusMoney/100){
                    this.getMoney = this.income.surplusMoney/100
                }
            },
            goDetails(){
                // 去收支明细页
                window.location.href = './withdrawDetails.html'
            },
            goRecords(){
                // 去提现记录页
                window.location.href = './withdrawRecords.html'
            },
            closeId(){
                // 关闭实名认证弹窗
                this.idShow = false
            },
            submit(data){
                // 提交实名认证
                realNameAuth({
                        idCard: data.id,
                        mobile: data.mobile,
                        realName: data.name,
                        smsCode: data.code
                }).then(r=>{
                    this.idShow = false
                    Toast('认证成功，请继续提现')
                }).catch(_=>{});



            },
            withdraw(){
                // 提现
                let name = this.income.userInfo.realName;
                let idNum = this.income.userInfo.identityCard;
                if(name && name != null && idNum && idNum != null){
                    withdraw({
                        activityId:window.actId,
                        applyMoney:this.getMoney
                    }).then(r=>{
                        Toast('申请提现成功')
                    }).catch(_=>{})
                } else {
                    this.idShow = true
                }
            }
        },
        mounted() {
            activityReward({activityId:window.actId}).then(r=>{
                this.income = {...r}
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {Button,Popup,RealNameAuth}
    }
</script>
<style lang="less" scoped>
#app{
    padding: 10px;
    .money{
        width: 100%;
        height: 50px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            width: 65%;
            height: 35px;
            background:rgba(252,252,252,1);
            border:1px solid rgba(238, 238, 238, 1);
            border-radius:3px;
            margin: 0 15px;
            padding-left: 13px;
            &::placeholder{
                color: #999;
                font-size: 12px;
            }
        }
        em{
            img{
                width: 14px;
                height: 14px;
            }
        }
        img{
            width: 14px;
            height: 13px;
        }
    }
    .indexBtn{
        width:100%;
        height:50px;
        background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
        border-radius: 3px ;
        color: #fff;
        margin: 16px 0;
        border:0;
    }
    .ruleBox{
        width:320px;
        height:363px;
        background:rgba(255,255,255,1);
        border-radius:3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: 0 19px;
        h3{
            font-weight: normal;
            color: #333333;
            font-size: 19px;
            margin: 23px 0 33px 0;
        }
        span{
            color: #333333;
            font-size: 15px;
            line-height: 30px;
        }
        .botSpan{
            width: 100%;
            display: block;
            text-align: left;
        }
        .ruleBtn{
            width:100%;
            height:40px;
            background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
            border-radius: 19px ;
            color: #fff;
            margin: 28px 0;
            border:0;
        }
    }
    .idBox{
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        img{
            width: 12px;
            height: 12px;
            position: absolute;
            right: 24px;
            top: 24px;
        }
        h4{
            font-size: 18px;
            color: #333;
            margin: 20px 0;
            font-weight: normal;
        }
        ul{
            width:100%;
            padding: 0 15px;
            li{
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                span{
                    display: inline-block;
                    width: 65px;
                    font-size: 13px;
                    color: #222;
                }
                input{
                    font-size: 15px;
                    color: #000;
                    border: 0;
                    margin-left: 15px;
                    &::placeholder{
                        font-size: 12px;
                        color: #999999;
                    }
                }
                i{
                    display: inline-block;
                    width:1px;
                    height:13px;
                    border:1px solid rgba(229,229,229,1);
                    margin-right: 13px;
                }
                em{
                    font-style: normal;
                    font-size: 13px;
                    color: #F9791B;
                }
                &:nth-child(2){
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    input{
                        width: 40%;
                    }
                    .code{
                        width: 35%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

        }
        .idBtn{
            width:260px;
            height:40px;
            background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
            border-radius: 19px;
            color: #fff;
            margin: 28px 0;
            border:0;
        }

    }
}
</style>