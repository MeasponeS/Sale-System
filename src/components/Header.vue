<template>
    <div class="cHeader">
        <img src="./img/back.png" alt="" @click="goBack">
        <h3 @click="goBack">返回</h3>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props:[],
        data:function () {
            return {

            }
        },
        methods:{
            goBack(){
                this.$emit('goBack')
            }
        },
        mounted(){
        },
        components:{

        }

    }
</script>

<style scoped lang="less">
    .cHeader{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 44px;
        img{
            width: 22px;
            height: 22px;
        }
        h3{
            margin: 0;
            font-size: 18px;
            color: #373737;
            font-weight: normal;
            margin-left: 4px;
        }
    }
</style>