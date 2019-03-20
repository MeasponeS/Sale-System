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
    import {wechatSignature} from "../../utils/weixin";
    import Config from '../../config/app'
    import Share from '../../components/Share'
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
                    console.log(r);
                    Toast('生成邀请人成功，请分享链接给邀请人');
                }).catch(_=>{})
            },
            know(){
                this.share = false
            }
        },
        mounted() {
            console.log(this.activityId);
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
