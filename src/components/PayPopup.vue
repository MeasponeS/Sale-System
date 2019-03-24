<template>
    <Popup v-model="showMobile" :close-on-click-overlay="false"	 @click-overlay="$emit('closePay')"	>
        <div class="wrapMobile">
            <h3>填写手机号</h3>
            <Field v-model="mobile"
                   class="input"
                   autofocus="true"
                   maxlength="11"
                   type="tel"
                   placeholder="用于获取课程卡号/密码，请务必确认"
                   ></Field>
            <Button class="bottomBtn" @click="goPay">去支付</Button>
        </div>
    </Popup>
</template>

<script>
    import {Popup,Toast,Field} from 'vant'
    export default {
        name: "PayPopup",
        props:['showMobile'],
        data:function () {
            return {
                mobile:''
            }
        },
        methods:{
            goPay(){
                //let phoneReg = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
                if(this.mobile.length == 0 || !this.mobile || this.mobile == null){
                    Toast('请填写手机号')
                    return
                }
                // if (phoneReg.test(this.mobile)) {
                //     Toast('请输入正确格式的手机号')
                //     return
                // }


                this.$emit('wxPay',this.mobile)

            }
        },
        components:{
            Popup,Field
        }

    }
</script>

<style scoped lang="less">
    .input{
        width: 260px;
        height: 50px;
        margin: 36px 0;
        padding-left: 14px;
        border:1px solid #fff;
        border-radius:20px;
        background: #F3F5F9;
        color: #363336;
        font-size: 15px;
        &::placeholder{
            font-size: 14px;
            color: #999;
        }
    }
    .wrapMobile{
        width: 320px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    h3{
        font-size: 18px;
        margin: 20px 0 0 0;
        color: #333;
        font-weight: normal;

        border-bottom:1px solid #F8F8F8;
    }
    .bottomBtn{
        width:100%;
        height:50px;
        background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
        color: #fff;
        border:0;
    }
    }
</style>