<template>
    <div id="app">
        <Header @goBack="goBack"></Header>
        <div class="idBox">
            <ul class="idContent">
                <li>
                    <span>手机号码</span>
                    <input type="tel" placeholder="请输入当前微信绑定的手机号" @blur="changeMobile" v-model="userInfo.mobile" maxlength="11">
                </li>
                <li>
                    <div>
                        <span>图形验证码</span>
                        <input type="text" placeholder="请输入图形验证码" v-model="verifyCodeInfo.imgCode">
                    </div>
                    <div class="codeImg" @click="changeImgCode">
                        <img :src="'data:image/jpg;base64,'+verifyCodeInfo.randomImg" alt="">
                    </div>

                </li>
                <li>
                    <div>
                        <span>验证码</span>
                        <input type="tel" placeholder="请输入验证码" v-model="verifyCodeInfo.code">
                    </div>
                    <div class="code">
                        <i></i>
                        <em @click="getCode" :style="{color:countDown != initCountDown ?'#999':'#F46A21'}">
                            {{ countDown != initCountDown ? countDown+'s' : '获取验证码' }}
                        </em>
                    </div>

                </li>
                <li>
                    <span>真实姓名</span>
                    <input type="text" placeholder="请输入真实姓名" v-model="userInfo.name">
                </li>
                <li>
                    <span>身份证号码</span>
                    <input class="idCard" type="text" placeholder="填写错误会导致提现失败" v-model="userInfo.idNum">
                </li>
            </ul>
            <Button class="idBtn" @click="checkData">提交认证</Button>
        </div>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {accessLog} from "../../utils/app";
    import {Toast} from 'vant'
    import {withdraw} from "../../api/activity";
    import Config from '../../config/app'
    import {sendMsgCode,randomImg,realNameAuth} from "../../api/activity";
    import Header from '../../components/Header'
    import G from 'lodash/get'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                countDown:Config.countDown,
                initCountDown:Config.countDown,
                verifyCodeInfo:{
                    randomImg:'',
                    key:'',
                    imgCode:'',
                    code:'',
                },
                userInfo:{
                    idNum:'',
                    name:'',
                    mobile:'',
                },
            }
        },
        methods: {
            goBack(){
                window.history.back()
            },
            wxSignatureCallback(){
                randomImg({}).then(r=>{
                    this.verifyCodeInfo.randomImg = r.verifyCodeInfo.imageBase64;
                    this.verifyCodeInfo.key = r.verifyCodeInfo.validateKey;
                    let reportLog = {
                        activityId:G(window,'URLPARAMS.actId',1),
                        groupId:'',
                        pageUrl:'/pages/realNameAuth.html',
                        pageName:'实名认证页',
                        clickEvent:'',
                        clickEventName:''
                    };
                    accessLog(reportLog)
                }).catch(_=>{})
            },
            changeMobile(){
                if(this.userInfo.mobile.length != 11){
                    Toast('手机号格式有误')
                    return
                }
            },
            getCode(){
                if(this.countDown < 60) return;
                if(this.userInfo.mobile.length != 11){
                    Toast('手机号格式有误')
                    return
                }
                if(this.verifyCodeInfo.imgCode == ''){
                    Toast('请先输入图形验证码')
                    return
                }
                sendMsgCode({
                    validateKey:this.verifyCodeInfo.key,
                    verifyCode:this.verifyCodeInfo.imgCode,
                    mobile:this.userInfo.mobile
                }).then(r=>{
                    let SMS = setInterval(() => {
                        if(this.countDown <= 0) {
                            clearInterval(SMS);
                            this.countDown = this.initCountDown;
                            return;
                        }
                        this.countDown --
                    }, 1000)
                }).catch(_=>{
                });

            },
            changeImgCode(){
                randomImg({}).then(r=>{
                    this.verifyCodeInfo.randomImg = r.verifyCodeInfo.imageBase64;
                    this.verifyCodeInfo.key = r.verifyCodeInfo.validateKey;
                }).catch(_=>{})
            },
            checkData(){
                if(this.userInfo.mobile.length != 11){
                    Toast('请输入正确的手机号')
                    return
                }
                if(this.verifyCodeInfo.imgCode == ''){
                    Toast('请输入图片验证码')
                    return
                }
                if(this.verifyCodeInfo.code == ''){
                    Toast('请输入验证码')
                    return
                }
                let reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if(!reg.test(this.userInfo.idNum)){
                    Toast('请输入有效格式的身份证号')
                    return
                }
                if(this.userInfo.name == ''){
                    Toast('请输入真实姓名')
                    return
                }
                let params = {
                    id:this.userInfo.idNum,
                    mobile:this.userInfo.mobile,
                    name:this.userInfo.name,
                    code:this.verifyCodeInfo.code};
                this.submit(params)

            },
            submit(data){
                // 提交实名认证
                realNameAuth({
                    idCard: data.id,
                    mobile: data.mobile,
                    realName: data.name,
                    smsCode: data.code
                }).then(r=>{
                    let reportLog = {
                        activityId:G(window,'URLPARAMS.actId',1),
                        groupId:'',
                        pageUrl:'/pages/realNameAuth.html',
                        pageName:'实名认证页',
                        clickEvent:'实名认证',
                        clickEventName:'点击实名认证'
                    };
                    accessLog(reportLog);

                    if(window.URLPARAMS.getMoney > 0){
                        withdraw({
                            activityId:G(window,'URLPARAMS.actId',1),
                            applyMoney:window.URLPARAMS.getMoney*100
                        }).then(r=>{
                            Toast('申请提现成功');
                            if(window.URLPARAMS.type == 1){
                                window.location.href = './withdraw.html?actId='+ G(window,'URLPARAMS.actId',1);
                            } else {
                                window.location.href = './incomeDetails.html?actId='+ G(window,'URLPARAMS.actId',1);
                            }
                        }).catch(_=>{})
                    }
                }).catch(_=>{});
            },
        },
        mounted() {


        },
        beforeDestroy: function () {

        },
        components: {Header}
    }
</script>
<style lang="less" scoped>
    #app{
        padding: 0 10px;
        height: 100vh;
        background: #f8f8f8;
    }
    .idBox{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        ul{
            width:100%;
            padding: 0 15px;
            background: #fff;
            li{
                width: 100%;
                height: 56px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-bottom: 1px solid #f8f8f8;
                span{
                    display: inline-block;
                    width: 88px;
                    font-size: 16px;
                    color: #333;
                }
                input{
                    width: 50%;
                    height: 30px;
                    font-size: 15px;
                    margin-left: 5px;
                    color: #000;
                    border: 0;
                    &::placeholder{
                        font-size: 12px;
                        color: #999999;
                        line-height: 20px;
                    }
                }
                i{
                    display: inline-block;
                    width:1px;
                    height:13px;
                    border:1px solid rgba(229,229,229,1);
                    background: rgba(229,229,229,1);
                    margin-right: 13px;
                }
                em{
                    font-style: normal;
                    font-size: 13px;
                    color: #F9791B;
                }
                &:nth-child(3),&:nth-child(2){
                    input{
                        width: 54%;
                    }
                    .code{
                        width: 40%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }

                .codeImg{
                    img{
                        display: block;
                        width: 60px;
                        height: 25px;
                    }
                }
            }

        }
        .idBtn{
            width:100%;
            height:40px;
            background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
            border-radius: 19px;
            color: #fff;
            margin: 20px 0;
            border:0;
        }

    }
</style>