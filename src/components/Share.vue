<template>
    <Popup v-model="share" :close-on-click-overlay="false">
        <div class="share" @click="know">
            <img class="yd" src="./img/fenxiang.png" alt="">
            <div class="tipp">点击右上角的“...”,开始分享吧！</div>
        </div>
    </Popup>
</template>

<script>
    import {Popup} from 'vant'
    export default {
        name: "Share",
        props:['share'],
        components:{
            Popup
        },
        methods:{
            know(){
                this.$emit('know')
            }
        },
    }
</script>

<style scoped lang="less">
    .share{
        width: 100vw;
        height: 100vh;
        background: #000;
        opacity: 0.7;
    }
    .yd{
        width: 60px;
        position: absolute;
        right: 20px;
        top: 10px;
    }
    .tipp{
        font-size: 22px;
        line-height: 10px;
        color: #fff;
        width: 100%;
        position: absolute;
        top: 100px;
        left: 0;
        text-align: center;
    }
</style>