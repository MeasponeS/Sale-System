<template>
    <Popup v-model="idShow" :close-on-click-overlay="false"  @click-overlay="$emit('closeBox')">
        <div class="idBox">
            <h4>实名认证</h4>
            <div class="imgBox" @click="$emit('closeId')">
                <img src="./img/guanbi.png" alt=""  class="close">
            </div>

            <ul class="idContent">
                <li style="border-top:1px solid rgba(229,229,229,1)">
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
                <li style="border-bottom:1px solid rgba(229,229,229,1)">
                    <span>身份证号</span>
                    <input class="idCard" type="text" placeholder="填写错误会导致提现失败" v-model="userInfo.idNum">
                </li>
            </ul>
            <Button class="idBtn" @click="checkData">提交认证</Button>
        </div>
    </Popup>
</template>

<script>
    import {Popup,Toast} from 'vant'
    import Config from '../config/app'
    import {sendMsgCode,randomImg,realNameAuth} from "../api/activity";
    export default {
        name: "RealNameAuth",
        props:['idShow'],
        data:function(){
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
        methods:{
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
                this.$emit('submit',params)

            }
        },
        mounted(){
            randomImg({}).then(r=>{
                this.verifyCodeInfo.randomImg = r.verifyCodeInfo.imageBase64;
                this.verifyCodeInfo.key = r.verifyCodeInfo.validateKey;
            }).catch(_=>{})
        },
        components:{Popup}
    }
</script>

<style scoped lang="less">
    .idBox{
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        .imgBox{
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 0;
            top: 0;
            .close{
                width: 12px;
                height: 12px;
            }
        }
        h4{
            font-size: 18px;
            color: #333;
            margin: 15px 0;
            font-weight: normal;
        }
        ul{
            width:100%;
            padding: 0 15px;
            li{
                width: 100%;
                height: 56px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                border-bottom: 1px solid #f8f8f8;
                span{
                    display: inline-block;
                    width: 65px;
                    font-size: 13px;
                    color: #222;
                }
                input{
                    width: 75%;
                    height: 30px;
                    font-size: 15px;
                    color: #000;
                    border: 0;
                    margin-left: 15px;
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
                    margin-right: 13px;
                }
                em{
                    font-style: normal;
                    font-size: 13px;
                    color: #F9791B;
                }
                &:nth-child(3),&:nth-child(2){
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    input{
                        width: 55%;
                    }
                    .code{
                        width: 40%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
                &:nth-child(3){
                    input{
                        width: 47%;
                    }
                }
                .codeImg{
                    img{
                        width: 60px;
                        height: 25px;
                    }
                }
            }

        }
        .idBtn{
            width:260px;
            height:40px;
            background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
            border-radius: 19px;
            color: #fff;
            margin: 20px 0;
            border:0;
        }

    }
</style>