<template>
    <div id="app" class="index">
        <div class="content">
            <h3>邀请人手机号</h3>
            <input type="number" v-model="mobile">
            <h3>您的销售推广码</h3>
            <input type="number" v-model="inviteCode">
            <vantButton class="indexBtn" @click="createRecommender">生成邀请人</vantButton>
            <div>
                <a href="##" @click="share = true">分享活动链接给邀请人</a>
            </div>
            <Share :share="share" @know="know"></Share>
        </div>
    </div>
</template>

<script>
    import {Button as vantButton,Toast}  from 'vant'
    import CommonMixin from '../commonMixin.js'
    import {generateRecommender} from '../../api/recommender'
    import Config from '../../config/app'
    import Share from '../../components/Share'
    import wx from 'weixin-js-sdk';
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
                    shareTitle:'分享给好友开团',
                    shareBody:'这是我分享给好友得团',
                    shareUrl:'https://hsj.hulian120.com/pay/beforeLogin.html?actId=' + Config.activityId ,
                    shareImg:'https://www.baidu.com/img/bd_logo1.png?where=super'
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
            createRecommender(){
                if(this.mobile.length != 11){
                    Toast('请输入正确的手机号');
                    return;
                }
                if(this.inviteCode.length != 6){
                    Toast('请输入正确的邀请码');
                    return;
                }
                generateRecommender({mobile:this.mobile,inviteCode:this.inviteCode,activityId: Config.activityId}).then(r=>{
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
        background: #FFF1EB;
        padding-top: 34px;
        .content{
            width: 316px;
            height: 400px;
            margin: 0 auto;
            background: #FFF;
            padding: 16px 28px;
            h3{
                font-size: 19px;
                color: #363336;
                font-weight: normal;
                margin: 20px 0;
            }
            input{
                width:100%;
                height:40px;
                background:rgba(252,252,252,1);
                border:1px solid rgba(255,183,159,1);
                border-radius:20px;
                margin-bottom: 16px;
                color: #363336;
                font-size: 19px;
                text-align: center;
            }
            .indexBtn{
                width:100%;
                height:40px;
                background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
                border-radius: 19px;
                color: #fff;
                margin: 30px 0;
                border:0;
            }
            div{
                width: 100%;
                text-align: center;
                a{
                    font-size: 13px;
                    color: #FF4800;
                    padding-bottom: 5px;
                    border-bottom: 1px solid #FF4800;
                    cursor: pointer;
                }
            }

        }
    }
</style>
