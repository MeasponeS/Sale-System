<template>
    <Popup v-model="showMobile">
        <div class="wrapMobile">
            <h3>填写手机号</h3>
            <input type="number" placeholder="用于获取课程卡号/密码，请务必确认" v-model="mobile" maxlength="11">
            <Button class="bottomBtn" @click="goPay">去支付</Button>
        </div>
    </Popup>
</template>

<script>
    import {Popup,Toast} from 'vant'
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
            Popup
        }

    }
</script>

<style scoped lang="less">
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
        color: #333;
        font-weight: normal;
        margin: 20px 0;
        border-bottom:1px solid #F8F8F8;
    }
    input{
        width: 260px;
        height: 40px;
        margin: 36px 0;
        border: 1px solid #eee;
        padding-left: 14px;
    &::placeholder{
         font-size: 14px;
         color: #999;
     }
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