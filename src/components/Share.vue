<template>

        <div class="share">
            <img class="yd" src="./img/fenxiang.png" alt="">
            <div class="tipp">点击右上角的“...”,开始分享吧！</div>
            <button class="Iknown" onclick="fadeOut">我知道了</button>
        </div>

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
            fadeOut(){
                this.$emit('know')
            }
        },
    }
</script>

<style scoped lang="less">
    .share{
        width: 100%;
        height: 100%;
        background: #000;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        color: #fff;
        opacity: 0.5;
        overflow: hidden;
    }
    .yd{
        width: 34px;
        position: absolute;
        right: 2px;
        top: 2px;
    }
    .tipp{
        font-size: 32px;
        line-height: 10px;
        color: #fff;
        width: 100%;
        position: absolute;
        top: 2.2px;
        left: 0;
        text-align: center;
    }
    button{
        cursor: pointer;
        width: 30px;
        height: 17px;
        background: none;
        border: 1px solid #fff;
        font-size:28px;
        line-height: 27px;
        text-align: center;
        color: #fff;
        position: absolute;
        top: 54.2px;
        left: 22px;
        border-radius:5px;
        z-index: 999;
    }
</style>