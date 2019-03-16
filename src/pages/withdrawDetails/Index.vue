<template>
    <div id="app">
        <ul v-if="list.length">
            <li>
                <div class="header">
                    <div class="count">
                        <em><img src="./img/gold.png" alt=""></em>
                        <span class="countMoney">账户余额</span>
                        <span>+338.3</span>
                    </div>
                    <div>20190310 18:00:00</div>
                </div>
                <div class="order">订单号:
                <span>3291380213218308</span>
                </div>
            </li>
            <li>
                <div class="header">
                    <div class="count">
                        <em><img src="./img/gold.png" alt=""></em>
                        <span class="countMoney">账户余额</span>
                        <span>+338.3</span>
                    </div>
                    <div>20190310 18:00:00</div>
                </div>
                <div class="order">订单号:
                <span>3291380213218308</span>
                </div>
            </li>
        </ul>
        <div class="empty" v-else>
            <img src="./img/goldx2.png" alt="">
            <div>暂无记录</div>
        </div>
    </div>
</template>

<script>
    import CommonMixin from '../commonMixin.js'
    import {rewardList} from '../../api/activity'
    import Config from '../../config/app'
    export default {
        name: 'app',
        mixins: [CommonMixin],
        data: function () {
            return {
                list:[]
            }
        },
        methods: {

        },
        mounted() {
            rewardList({activityId:Config.activityId}).then(r=>{
                console.log(r);
            }).catch(_=>{})
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
                padding: 0 14px;
                .header{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 18px 0;
                    .count{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        em{
                            img{
                                width: 19px;
                                height: 19px;
                            }
                        }
                        span{
                            font-size: 16px;
                            color: #333;
                        }
                    }
                    .countMoney{
                        margin: 0 10px;
                    }
                    div{
                        font-size: 12px;
                        color: #999;
                    }
                }
                .order{
                    font-size: 15px;
                    color: #999;
                    margin-bottom: 20px;
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
                width: 54px;
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