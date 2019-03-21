<template>
    <div id="app">
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
            <img src="./img/goldx2.png" alt="">
            <div>暂无记录</div>
        </div>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {rewardList} from '../../api/activity'
    import Config from '../../config/app'
    import wx from 'weixin-js-sdk';
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[]
            }
        },
        methods: {
            wxSignatureCallback(){
                let config = {
                    shareTitle:'分享给好友开团',
                    shareBody:'这是我分享给好友得团',
                    shareUrl:'https://hsj.hulian120.com/pay/groupBuy.html?recommenderUserId='+window.URLPARAMS.id + 'activityId' + Config.activityId ,
                    shareImg:'//www.baidu.com/img/bd_logo1.png?where=super'
                };

                wx.onMenuShareAppMessage({
                    title: config.shareTitle, // 分享标题
                    desc: config.shareBody, // 分享描述
                    link: config.shareUrl, // 分享链接
                    imgUrl: config.shareImg, // 分享图标
                    //type: '', // 分享类型,music、video或link，不填默认为link
                    //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        Toast('分享成功');
                    },
                    cancel: function () {
                        Toast('分享失败');
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
            rewardList({activityId:Config.activityId}).then(r=>{
                this.list = r
            }).catch(_=>{})
        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>
<style lang="less" scoped>
    #app{
        padding: 10px;
        ul{
            width: 100%;
            li{
                padding: 0 14px;
                .header{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 18px 0;
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
                    margin-bottom: 20px;
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