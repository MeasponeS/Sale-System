<template>
    <div id="app">
        <Header @goBack="goBack"></Header>
        <ul v-if="list.length">
            <li v-for="item in list">
                <div class="header">
                    <div class="count">
                        <em><img src="./img/gold.png" alt=""></em>
                        <span class="countMoney">账户余额</span>
                        <span>+{{item.money | Money}}</span>
                    </div>
                    <div>{{item.createTime}}</div>
                </div>
                <div class="order">订单号:
                <span>{{item.orderNum}}</span>
                </div>
            </li>
        </ul>
        <div class="empty" v-else>
            <img src="./img/empty.png" alt="">
            <div>暂无记录</div>
        </div>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {rewardList} from '../../api/activity'
    import Config from '../../config/app'
    import wx from 'weixin-js-sdk';
    import {accessLog} from "../../utils/app";
    import Header from '../../components/Header'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[]
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
                    shareUrl: Config.shareUrl + 'beforeLogin.html' ,
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
        },
        filters:{
            Money:function(value){
                return '￥' + parseInt(value)/100
            }
        },
        mounted() {
            rewardList({activityId:window.URLPARAMS.actId || 1}).then(r=>{
                this.list = r;
                let reportLog = {
                    activityId:window.URLPARAMS.actId || 1,
                    pageUrl:'/pages/withdrawDetails.html',
                    pageName:'收支明细页',
                    clickEvent:'',
                    clickEventName:''
                };
                accessLog(reportLog);
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {Header}
    }
</script>
<style lang="less" scoped>
    #app{
        padding: 10px;
        background: #f8f8f8;
        height: 100vh;
        ul{
            width: 100%;
            background: #f8f8f8;
            li{
                padding: 20px 15px;
                margin-bottom: 10px;
                background: #fff;
                border-radius: 3px;
                .header{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .count{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        em{
                            img{
                                width: 19px;
                                height: 19px;
                            }
                        }
                        span{
                            font-size: 16px;
                            color: #333;
                        }
                    }
                    .countMoney{
                        margin: 0 10px;
                    }
                    div{
                        font-size: 12px;
                        color: #999;
                    }
                }
                .order{
                    font-size: 15px;
                    color: #999;
                    margin-top: 18px;
                }

            }
        }
        .empty{
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img{
                width: 54px;
                height: 54px;
            }
            div{
                margin-top: 30px;
                font-size: 19px;
                color: #333;
            }
        }
    }
</style>