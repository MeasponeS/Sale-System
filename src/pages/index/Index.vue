<template>
    <div id="app" class="index">
        <div class="content">
            <h3>邀请人手机号</h3>
            <input type="tel" v-model="mobile"  maxlength="11">
            <h3>您的销售推广码</h3>
            <input type="tel" v-model="inviteCode" >
            <vantButton class="indexBtn" @click="createRecommender">生成邀请人</vantButton>
            <vantButton class="shareBtn" @click="share = true">分享活动链接给邀请人</vantButton>
            <Share :share="share" @know="know"></Share>
        </div>
        <div class="img">
            <img src="./logo.png" alt="">
        </div>

    </div>
</template>

<script>
    import {Button as vantButton,Toast}  from 'vant'
    import CommonMixin from '../commonMixin.js'
    import {generateRecommender} from '../../api/recommender'
    import Share from '../../components/Share'
    import wx from 'weixin-js-sdk';
    import {shareFriendQ,shareFriend} from "../../utils/weixin";
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                mobile:'',
                inviteCode:'',
                share:false
            }
        },
        methods: {
            wxSignatureCallback(){

                let config = {
                    shareTitle:'邀请人主页',
                    shareBody:'赶快进入主页参与活动吧',
                    shareUrl:'https://hsj.hulian120.com/pay/mainPage.html?actId=' + window.actId,
                    shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                };
                shareFriend(config)
                shareFriendQ(config)


            },
            createRecommender(){
                if(this.mobile.length != 11){
                    Toast('请输入正确的手机号');
                    return;
                }
                if(this.inviteCode.length != 6){
                    Toast('请输入正确的邀请码');
                    return;
                }

                generateRecommender({mobile:this.mobile,inviteCode:this.inviteCode,activityId: window.actId}).then(r=>{
                    Toast('生成邀请人成功，请分享链接给邀请人');
                }).catch(_=>{})
            },
            know(){
                this.share = false
            }
        },
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {vantButton,Share}
    }
</script>
<style lang="less" scoped>
    #app{
        width: 100%;
        height: 100vh;
        padding-top: 34px;
        position: relative;
        .content{
            width: 344px;
            height: 400px;
            margin: 0 auto;
            background: #FFF;
            padding: 16px 0;
            h3{
                font-size: 15px;
                color: #FF4D00;
                font-weight: normal;
                margin: 20px 0;
                margin-left: 14px;
            }
            input{
                width:100%;
                height:40px;
                border:1px solid #fff;
                border-radius:20px;
                margin-bottom: 16px;
                background: #F3F5F9;
                color: #363336;
                font-size: 19px;
                text-align: center;
                box-shadow: none;
                -webkit-appearance: none;
                &::placeholder{
                    font-size: 19px;
                    color: #363336;
                }
            }
            .indexBtn{
                width:100%;
                height:40px;
                background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
                border-radius: 19px;
                color: #fff;
                margin: 30px 0;
                border:0;
                font-size: 18px;
            }
            .shareBtn{
                width:100%;
                height:40px;
                border:1px solid rgba(255,64,0,1);
                background:#fff;
                border-radius: 19px;
                color: #FF4D00;
                font-size: 18px;
            }
            div{
                width: 100%;
                text-align: center;
                a{
                    font-size: 13px;
                    color: #222;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #222;
                    cursor: pointer;
                }
            }
        }
        .img{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
            img{
                width: 68px;
                height: 25px;
            }
        }
    }
</style>
