<template>
    <div id="app">
        <ul v-if="list.length">
            <li>
                <div class="top">
                    <div class="left">
                        <img src="./img/gray.png" alt="">
                        提现<span>39.00</span>元
                    </div>
                    <div class="right">
                        20190310 18:00:00
                    </div>
                </div>
                <div class="bottom">
                    <em>扣税3.5元</em>
                    <span>提现中</span>
                </div>
            </li>
            <li>
                <div class="top">
                    <div class="left">
                        <img src="./img/ticket.png" alt="">
                        提现<span>39.00</span>元
                    </div>
                    <div class="right">
                        20190310 18:00:00
                    </div>
                </div>
                <div class="bottom">
                    <em>扣税3.5元</em>
                    <span>提现中</span>
                </div>
            </li>
        </ul>
        <div class="empty" v-else>
            <img src="./img/ticketX2.png" alt="">
            <div>暂无记录</div>
        </div>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[1]
            }
        },
        methods: {

        },
        mounted() {

        },
        beforeDestroy: function () {

        },
        components: {}
    }
</script>
<style lang="less" scoped>
    #app{
        padding: 10px;
        ul{
            width: 100%;
            li{
                width: 100%;
                height: 83px;
                padding: 0 16px;
                .top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 18px 0;
                    .left{
                        font-size: 16px;
                        color: #333;
                        img{
                            display: inline-block;
                            width: 18px;
                            height: 14px;
                            margin-right: 9px;
                        }
                    }
                    .right{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 12px;
                        color: #999;


                    }
                }
                .bottom{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    em{
                        font-size: 15px;
                        color: #999;
                        font-style: normal;
                    }
                    span{
                        font-size: 16px;
                        color: #333;
                    }
                }
            }
        }
        .empty{
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img{
                width: 68px;
                height: 54px;
            }
            div{
                margin-top: 30px;
                font-size: 19px;
                color: #333;
            }
        }
    }
</style>