<template>
    <div id="app">
        <Header @goBack="goBack"></Header>
        <div class="money orderPeople">
            <span>购买人数</span>
            <span>{{income.orderCount || 0  }}人</span>
        </div>
        <div class="money" style="border-bottom: 1px solid #f8f8f8">
            <span>账户余额</span>
            <span>{{income.surplusMoney || 0  |Money}}</span>
        </div>
        <div class="money" style="border-bottom: 1px solid #f8f8f8">
            <span>申请中金额</span>
            <span>{{income.applyingMoney || 0  |Money}}</span>
        </div>
        <div class="money">
            <span>已提现金额</span>
            <span>{{income.withdrawMoney || 0  |Money}}</span>
        </div>
        <div class="money withdraw">
            <span>提现金额</span>
            <Field v-model="getMoney"
                   class="input"
                   type="number"
                   placeholder="不能超过账户余额"
                   @input="checkMoney"
            ></Field>
            <em @click="rulesShow = true"><img src="./img/green.png" alt=""></em>
        </div>
        <Button class="indexBtn" @click="withdraw" :disabled="getMoney <= 0">提现</Button>
        <div class="money" @click="goDetails" style="border-bottom: 1px solid #f8f8f8">
            <span>收支明细</span>
            <img src="./img/right.png" alt="">
        </div>
        <div class="money" @click="goRecords">
            <span>提现记录</span>
            <img src="./img/right.png" alt="">
        </div>
        <Popup v-model="rulesShow">
            <div class="ruleBox">
                <h4>提现规则</h4>
                <span style="margin: 9px 0">1.每月5号结算上个月的提现申请，1-5个工作日到账</span>
                <span >2.个税计算方法如下:
                    <span>800元以下的：无个人所得税</span>
                    <span>800-4000元：个税=(收入额-800）*20%</span>
                    <span>4000-25000元：个税=收入额*（1-20%）*20%</span>
                    <span class="warnInfo">*单月存在多笔提现申请时会合并为一笔计算个人所得税</span>
                </span>
                <span style="margin-top: 6px;margin-bottom: 9px ">3.如有任何疑问，请拨打客服电话400-8650-512</span>
                <span class="botSpan" style="margin-bottom: 20px ">4.最终解释权归护士加所有</span>
                <Button class="ruleBtn" @click="rulesShow = false">知道了</Button>
            </div>
        </Popup>

    </div>
</template>

<script>
    import {Button,Popup,Toast,Field} from 'vant'
    import CommonMixin from '../commonMixin.js'
    import {activityReward,realNameAuth} from "../../api/activity";
    import {withdraw} from "../../api/activity";
    import wx from 'weixin-js-sdk';
    import {accessLog} from "../../utils/app";
    import Header from '../../components/Header'
    import Config from '../../config/app'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                rulesShow:false,
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
            goBack(){
                window.history.back()
            },
            wxSignatureCallback(){
                let config = {
                    shareTitle:'邀请人主页',
                    shareBody:'赶快进入主页参与活动吧',
                    shareUrl: Config.shareUrl +'activityPage.html?recommenderUserId='+ this.recommenderId + '&actId=' + window.actId ,
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
                window.location.href = './withdrawDetails.html?groupId=' + URLPARAMS.groupId || ''
            },
            goRecords(){
                // 去提现记录页
                window.location.href = './withdrawRecords.html?groupId=' + URLPARAMS.groupId || ''
            },
            withdraw(){
                // 提现
                let name = this.income.userInfo.realName;
                let idNum = this.income.userInfo.identityCard;
                if(name && name != null && idNum && idNum != null){
                    let reportLog = {
                        activityId:window.actId,
                        groupId:URLPARAMS.groupId || '',
                        pageUrl:'/pages/incomeDetails.html',
                        pageName:'活动收益页',
                        clickEvent:'点击提现',
                        clickEventName:'提现'
                    };
                    accessLog(reportLog);
                    withdraw({
                        activityId:window.actId,
                        applyMoney:this.getMoney*100
                    }).then(r=>{
                        Toast('申请提现成功')
                        this.getMoney = ''
                        activityReward({activityId:window.actId}).then(r=>{
                            this.income = {...r}
                        }).catch(_=>{})
                    }).catch(_=>{})
                } else {
                    window.location.href = './realNameAuth.html?getMoney=' + this.getMoney
                }
            }

        },
        mounted() {
            activityReward({activityId:window.actId}).then(r=>{
                this.income = {...r}
                let reportLog = {
                    activityId:window.actId,
                    groupId:URLPARAMS.groupId || '',
                    pageUrl:'/pages/incomeDetails.html',
                    pageName:'活动收益页',
                    clickEvent:'',
                    clickEventName:''
                };
                accessLog(reportLog);
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {Button,Popup,Field,Header}
    }
</script>
<style lang="less" scoped>
#app{
    padding: 10px;
    background: #F8F8F8;
    height: 100vh;
    .orderPeople{
        margin-bottom: 10px;
    }
    .money{
        background: #fff;
        width: 100%;
        height: 50px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .input{
            width: 65%;
            height: 35px;
            background:rgba(252,252,252,1);
            border:1px solid rgba(238, 238, 238, 1);
            border-radius:3px;
            display: flex;
            justify-content: center;
            align-items: center;
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
    .withdraw{
        margin-top: 10px;
    }
    .indexBtn{
        width:100%;
        height:50px;
        background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
        border-radius: 3px ;
        color: #fff;
        font-size: 18px;
        margin: 16px 0;
        border:0;
    }
    .ruleBox{
        width:344px;
        background:rgba(255,255,255,1);
        border-radius:5px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 0 15px;
        h4{
            font-weight: normal;
            color: #333333;
            font-size: 19px;
            margin-top: 20px;
            margin-bottom: 0;
            padding-bottom: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #f8f8f8;
        }
        span{
            color: #333333;
            font-size: 14px;
            letter-spacing: 0;
            line-height: 20px;
            text-align: left;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            span{
                font-size: 13px;
                margin: 3px 0;
                margin-left: 13px;
            }
            .warnInfo{
                color: #FF4000;
            }
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
            margin-bottom: 28px;
            border:0;
        }
    }
}
</style>