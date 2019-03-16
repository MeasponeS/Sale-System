<template>
    <div id="app">
        <div class="money">
            <span>账户余额</span>
            <span>￥98.00</span>
        </div>
        <div class="money">
            <span>申请中金额</span>
            <span>￥18.00</span>
        </div>
        <div class="money">
            <span>已提现金额</span>
            <span>￥6.00</span>
        </div>
        <div class="money">
            <span>提现金额</span>
            <input type="number" placeholder="不能超过账户余额">
            <em @click="rulesShow = true"><img src="./img/green.png" alt=""></em>
        </div>
        <Button class="indexBtn" @click="idShow = true">提现</Button>
        <div class="money" @click="goDetails">
            <span>收支明细</span>
            <img src="./img/right.png" alt="">
        </div>
        <div class="money" @click="goRecords">
            <span>提现记录</span>
            <img src="./img/right.png" alt="">
        </div>
        <Popup v-model="rulesShow" :close-on-click-overlay="false">
            <div class="ruleBox">
                <h4>提现规则</h4>
                <span>1.每月1号结算上个月的提现申请，1-5个工作日到账</span>
                <span>2.一个自然月内累计申请提现金额≧800时，需按照国家税务规定缴纳相关税费</span>
                <span>3.如有任何疑问，请拨打客服电话400-8650-512</span>
                <span class="botSpan">最终解释权归护士加所有</span>
                <Button class="ruleBtn" @click="rulesShow = false">知道了</Button>
            </div>
        </Popup>
        <Popup v-model="idShow" :close-on-click-overlay="false">
            <div class="idBox">
                <h4>实名认证</h4>
                <img src="./img/guanbi.png" alt="" @click="idShow = false">
                <ul class="idContent">
                    <li style="border-top:1px solid rgba(229,229,229,1)">
                        <span>手机号码</span>
                        <input type="number" placeholder="请输入当前微信绑定的手机号">
                    </li>
                    <li>
                        <div>
                            <span>验证码</span>
                            <input type="number" placeholder="请输入验证码">
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
                        <input type="text" placeholder="请输入真实姓名">
                    </li>
                    <li style="border-bottom:1px solid rgba(229,229,229,1)">
                        <span>身份证号码</span>
                        <input type="number" placeholder="填写错误会导致提现失败">
                    </li>
                </ul>
                <Button class="idBtn" @click="rulesShow = false">提交认证</Button>
            </div>
        </Popup>
    </div>
</template>

<script>
    import {Button,Popup} from 'vant'
    import CommonMixin from '../commonMixin.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                rulesShow:false,
                idShow:false,
                countDown:60,
                initCountDown:60
            }
        },
        methods: {
            goDetails(){
                window.location.href = './withdrawDetails.html'
            },
            goRecords(){
                window.location.href = './withdrawRecords.html'
            },
            getCode(){
                if(this.countDown < 60) return;
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
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {Button,Popup}
    }
</script>
<style lang="less" scoped>
#app{
    padding: 10px;
    .money{
        width: 100%;
        height: 50px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            width: 65%;
            height: 35px;
            background:rgba(252,252,252,1);
            border:1px solid rgba(238, 238, 238, 1);
            border-radius:3px;
            margin: 0 15px;
            padding-left: 13px;
            &::placeholder{
                color: #999;
                font-size: 12px;
            }
        }
        em{
            img{
                width: 14px;
                height: 14px;
            }
        }
        img{
            width: 14px;
            height: 13px;
        }
    }
    .indexBtn{
        width:100%;
        height:50px;
        background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
        border-radius: 3px ;
        color: #fff;
        margin: 16px 0;
        border:0;
    }
    .ruleBox{
        width:320px;
        height:363px;
        background:rgba(255,255,255,1);
        border-radius:3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: 0 19px;
        h3{
            font-weight: normal;
            color: #333333;
            font-size: 19px;
            margin: 23px 0 33px 0;
        }
        span{
            color: #333333;
            font-size: 15px;
            line-height: 30px;
        }
        .botSpan{
            width: 100%;
            display: block;
            text-align: left;
        }
        .ruleBtn{
            width:100%;
            height:40px;
            background:linear-gradient(0deg,rgba(255,64,0,1),rgba(255,119,0,1));
            border-radius: 19px ;
            color: #fff;
            margin: 28px 0;
            border:0;
        }
    }
    .idBox{
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        img{
            width: 12px;
            height: 12px;
            position: absolute;
            right: 24px;
            top: 24px;
        }
        h4{
            font-size: 18px;
            color: #333;
            margin: 20px 0;
            font-weight: normal;
        }
        ul{
            width:100%;
            padding: 0 15px;
            li{
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                span{
                    display: inline-block;
                    width: 65px;
                    font-size: 13px;
                    color: #222;
                }
                input{
                    font-size: 15px;
                    color: #000;
                    border: 0;
                    margin-left: 15px;
                    &::placeholder{
                        font-size: 12px;
                        color: #999999;
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
                &:nth-child(2){
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    input{
                        width: 40%;
                    }
                    .code{
                        width: 35%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
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
            margin: 28px 0;
            border:0;
        }

    }
}
</style>