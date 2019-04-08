<template>
    <div id="app" class="index">
        <div class="content">
            <h3>您的销售推广码</h3>
            <input type="tel" v-model="inviteCode" >
            <vantButton class="shareBtn" @click="checkCode">分享活动链接给邀请人</vantButton>
            <Share :share="share" @know="know"></Share>
            <span class="notice">
                注：必须先点击该按钮，不然无法分享活动链接
            </span>
        </div>
        <div class="img">
            <img src="./logo.png" alt="">
        </div>

    </div>
</template>

<script>
    import {Button as vantButton}  from 'vant'
    import CommonMixin from '../commonMixin.js'
    import Share from '../../components/Share'
    import {shareFriendQ,shareFriend} from "../../utils/weixin";
    import Config from '../../config/app'
    import {generateLeader} from '../../api/recommender'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                inviteCode:'',
                share:false
            }
        },
        methods: {
            checkCode(){
                generateLeader({
                    activityId:window.actId,
                    inviteCode:this.inviteCode
                }).then(r=>{
                    let config = {
                        shareTitle:'邀请人主页',
                        shareBody:'赶快进入主页参与活动吧',
                        shareUrl:Config.shareUrl+'activityPage.html?actId=' + window.actId + '&kolStatus=0' ,
                        shareImg:'http://static.hulian120.com/activity/sale/saleicon.png'
                    };
                    shareFriend(config);
                    shareFriendQ(config);
                    this.share = true
                }).catch(_=>{})

            },
            wxSignatureCallback(){

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
            .notice{
                display: block;
                width: 100%;
                text-align: center;
                margin-top: 15px;
                font-size: 14px;
                color: red;
            }
            .shareBtn{
                width:100%;
                height:40px;
                border:1px solid rgba(255,64,0,1);
                background:#fff;
                border-radius: 19px;
                color: #FF4D00;
                font-size: 18px;
                margin-top: 40px;
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
