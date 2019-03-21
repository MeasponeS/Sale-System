<template>
    <div id="app">
        <div class="main">
            <h2>您好，请登录！</h2>
            <div class="phone">
                <vantIcon name="phone" class="icon"></vantIcon>
                <input type="number" class="tel" placeholder="手机号" v-model="mobile" :disabled="mobile != ''">
                <div class="get-msg" @click="getCode" :style="{color:countDown != initCountDown ?'#DCDCDC':'#F46A21'}">
                    <div class="line"></div>
                    {{ countDown != initCountDown ? countDown+'s' : '重新发送' }}
                </div>
            </div>
            <div class="code">
                <vantIcon name="lock" class="icon"></vantIcon>
                <input type="number" placeholder="请输入验证码" v-model="code">
            </div>
            <vantButton class="indexBtn" @click="checkCode">登陆</vantButton>
        </div>
    </div>
</template>

<script>
    import {Button as vantButton,Toast} from 'vant';
    import {Icon as vantIcon} from 'vant';
    import {sendSmsCode,checkSmsCode} from '../../api/recommender'
    import Config from '../../config/app'
    import {getUrlInfo,setToken} from "../../utils/dataStorage";
    import {getTokenMethods} from "../../api/wechat";
    export default {
        name: 'app',
        data: function () {
            return {
                countDown:Config.countDown,
                initCountDown:Config.countDown,
                mobile:'',
                code:'',
                wxCode:''
            }
        },
        methods: {
            checkCode(){
                if(this.mobile.length != 11){
                    Toast('请输入正确的手机号');
                    return;
                }
                checkSmsCode({mobile:this.mobile,smsCode:this.code,activityId:window.actId}).then(r=>{
                    this.login()
                }).catch(err=>{
                    Toast(err)
                })
            },
            login(){
                let server_url = encodeURIComponent('https://testsale.hulian120.com/sale/api/wx/login');
                getTokenMethods({
                    actId:window.actId,
                    code:this.wxCode,
                    mp:'hushijia',
                    serverUrl:server_url,
                    mobile:this.mobile
                }).then(r=>{
                    console.log(r);
                    alert(r)
                    setToken(r);
                    Toast('登陆成功');
                    // window.setTimeout(()=>{
                    //     window.location.href = './mainPage.html?actId=' + window.actId
                    // },200);
                }).catch(_=>{})
            },
            getCode(){
                if(this.countDown < 60) return;
                sendSmsCode({mobile:this.mobile,activityId:window.actId}).then(r=>{
                    let SMS = setInterval(() => {
                        if(this.countDown <= 0) {
                            clearInterval(SMS);
                            this.countDown = this.initCountDown;
                            return;
                        }
                        this.countDown --
                    }, 1000)
                }).catch(_=>{})
            }
        },
        mounted() {
            this.mobile = getUrlInfo('mobile');
            this.wxCode = getUrlInfo('code');
            if(this.mobile.length > 0 && this.mobile != ''){
                this.countDown = 59;
                let SMS = setInterval(() => {
                    if(this.countDown <= 0) {
                        clearInterval(SMS);
                        this.countDown = this.initCountDown;
                        return;
                    }
                    this.countDown --
                }, 1000)
            }
        },
        beforeDestroy: function () {

        },
        components: {vantButton,vantIcon}
    }
</script>
<style lang="less" scoped>
    #app{
        background: #fff;
    }
    .main{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 0 15px;
        h2{
            font-size: 30px;
            color: #262626;
            margin: 50px 0;
            font-weight: normal;
            padding-left: 10px;
        }
        .code{
            width: 100%;
            height: 50px;
            border-bottom: 1px solid rgba(220,220,220,1);
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0 5px;
            .icon{
                width: 12px;
                height: 17px;
            }
            input{
                font-size: 19px;
                color: #222;
                border: 0;
                margin-left: 15px;
                width: 90%;
                &::placeholder{
                    font-size: 16px;
                    color: #999;
                }
                &:disabled{
                    background-color : #fff;
                    color: #666;
                    opacity:1;}
            }
            .line{
                width:1px;
                height:29px;
                background:rgba(220,220,220,1);
                margin-right: 13px;
            }
            span{
                width: 80px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                font-size: 16px;
                color: #F46A21;
            }
        }
        .phone{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 5px;
            border-bottom: 1px solid rgba(220,220,220,1);
            input{
                height: 50%;
                flex: 1;
                border:0;
                font-size: 19px;
                color: #222;
                margin-left: 15px;
                width: 45%;
                &::placeholder{
                    font-size: 16px;
                    color: #999;
                }
            }
            .get-msg{
                display: flex;
                justify-content: center;
                align-items: center;
                .line{
                    width:1px;
                    height:29px;
                    background:rgba(220,220,220,1);
                    margin-right: 13px;
                }
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
        }
    }
</style>

