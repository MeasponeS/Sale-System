<template>
    <div id="app">
        <ul v-if="list.length">
            <li v-for="item in list">
                <div class="top">
                    <div class="left" :style="'color:'+ item.status == 2? '#999':'#333' ">
                        <img v-if="item.status == 1" src="./img/ticket.png" alt="">
                        <img v-else  src="./img/gray.png" alt="">
                        提现<span>{{item.applyMoney | Money}}</span>元
                    </div>
                    <div class="right">
                        {{item.createTime}}
                    </div>
                </div>
                <div class="bottom">
                    <em>扣税{{item.tax}}元</em>
                    <span v-if="item.status == 0">提现中</span>
                    <span v-if="item.status == 2" style="color: #999999">提现失败</span>
                    <span v-if="item.status == 1" style="color: #FF4000">提现成功</span>
                </div>
            </li>
        </ul>
        <div class="empty" v-else>
            <img src="./img/ticketX2.png" alt="">
            <div>暂无记录</div>
        </div>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {withdrawList} from '../../api/activity'
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
                return (parseInt(value)/100).toFixed(2)
            }
        },
        mounted() {
            withdrawList({activityId:Config.activityId}).then(r=>{
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
                width: 100%;
                height: 83px;
                padding: 0 16px;
                .top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 18px 0;
                    .left{
                        font-size: 16px;
                        color: #333;
                        img{
                            display: inline-block;
                            width: 18px;
                            height: 14px;
                            margin-right: 9px;
                        }
                    }
                    .right{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 12px;
                        color: #999;


                    }
                }
                .bottom{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    em{
                        font-size: 15px;
                        color: #999;
                        font-style: normal;
                    }
                    span{
                        font-size: 16px;
                        color: #333;
                    }
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
                width: 68px;
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