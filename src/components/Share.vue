<template>
    <Popup v-model="share" :close-on-click-overlay="false">
        <div class="share">
            <img class="yd" src="./img/fenxiang.png" alt="">
            <div class="tipp">点击右上角的“...”,开始分享吧！</div>
            <button class="Iknown" @click="know">我知道了</button>
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
    button{
        cursor: pointer;
        width: 100px;
        height: 50px;
        background: none;
        border: 1px solid #fff;
        font-size:20px;
        line-height: 46px;
        text-align: center;
        color: #fff;
        position: absolute;
        top: 140px;
        left: 127px;
        border-radius:5px;
        z-index: 999;
    }
</style>