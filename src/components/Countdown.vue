<template>
    <div class="countdown">
        <span>{{h}}</span>:<span>{{m}}</span>:<span>{{s}}</span>
    </div>
</template>

<script>

    export default {
        name: 'Countdown',
        props: {
            second: Number
        },
        data: function () {
            return {
                h: '',
                m: '',
                s: ''
            }
        },
        mounted() {
            console.log(this.second);
            if (this.second == 0) return;
            let initSecond = this.second;
            let that = this;
            window.Countdown = setInterval(_ => {
                if (initSecond <= 0) {
                    this.$emit('end');
                    clearInterval(window.Countdown);
                    return
                }
                initSecond--;
                this.$emit('toggle');

                let hour = Math.floor(initSecond / 3600);
                let minute = Math.floor(initSecond % 3600 / 60);
                let second = Math.floor(initSecond % 60);
                console.log(that.h, that.m, that.s);
                that.h = (hour < 10 ? '0' + hour : hour);

                that.m = (minute < 10 ? '0' + minute : minute);

                that.s = (second < 10 ? '0' + second : second);
            }, 1000)

        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .countdown{
        display: inline-block;
    }
    span{
        display: inline-block;
        width:21px;
        height:19px;
        background:rgba(255,241,235,1);
        border-radius:2px;
        color: #FF4000;
        font-size: 12px;
        line-height: 19px;
        text-align: center;
    }
</style>
