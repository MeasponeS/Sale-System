<template>
    <div id="app">
        <Header @goBack="goBack"></Header>
        <h3>微信支付商户退款后多久会到账？</h3>
        <div class="headerBox">
            <span>根据您的支付方式不同，退款到账时间会有不同:</span>
            <span>1、如使用零钱支付：商家发起退款后实时退回；</span>
            <span>2、如使用银行卡支付，商家发起退款后，系统会根据您的付款银行进行退款，1-3个工作日退回。</span>
            <span>退款进度查询：可打开微信-&gt;【账单】-&gt;在【全部交易类型】中选择【有退款】，查看对应账单记录的退款详情。</span>
        </div>
        <div class="footerBox">
            <h3>温馨提示</h3>
            <span>1、如资金退回零钱是实时退回，退款完成后会立刻到账，请您查询零钱明细即可；</span>
            <span>2、部分银行退款无短信提醒功能，请留意查看银行流水；</span>
            <span>3、退款不会产生新的账单记录，由原账单退回。</span>
        </div>
        <div class="erweima">
            <h3>如有疑问请添加客服微信：</h3>
            <img src="./erweima.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import Header from '../../components/Header'
    //import CommonMixin from '../commonMixin'
    export default {
        name: 'app',
        //Mixins:[CommonMixin],
        data: function () {
            return {

            }
        },
        methods: {
            goBack(){
                window.history.back()
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
        padding: 0 15px;
        height: 100vh;
        background: #fff;
        h3{
            width: 100%;
            font-size: 16px;
            padding:15px 0;
            margin: 0;
            border-bottom:1px solid #F8F8F8;
        }
        .headerBox{
            padding: 10px 0;
            span{
                display: block;
                line-height: 24px;
                color: #333;
            }
        }
        .footerBox{
            padding: 10px 0;
            h3{
                color: #008000;
                font-weight: normal;
                border: 0;
                padding: 0;
                margin: 10px 0;
            }
            span{
                display: block;
                line-height: 24px;
                color: #333;
            }
        }
        .erweima{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-bottom: 30px;
            h3{
                color: #008000;
                font-weight: normal;
                border: 0;
                padding: 0;
                margin: 10px 0;
            }
            img{
                width: 200px;
                height: 200px;
            }
        }

    }


</style>