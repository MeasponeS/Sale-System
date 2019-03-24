<template>
    <div class="countNum" >
        <div v-if="status == 1 && second > 0"><span>{{h}}</span>:<span>{{m}}</span>:<span>{{s}}</span></div>
        <div v-else><span>00</span>:<span>00</span>:<span>00</span></div>
    </div>
</template>

<script>

    export default {
        name: 'Countdown',
        props: {
            second: Number,
            status:Number
        },
        data: function () {
            return {
                h: '',
                m: '',
                s: ''
            }
        },
        mounted() {
            this.initFn()
        },
        watch:{
              'second':{
                  deep:true,
                  handler:function (newVal,oldVal) {
                      if(newVal > 0){
                          this.initFn()
                      } else if (newVal <= 0){
                          clearInterval(window.Countdown);
                          this.h = '00';
                          this.m = '00';
                          this.s = '00';
                          this.$emit('end');
                      }
                  }
              }
        },
        methods:{
            initFn(){
                if (this.second <= 0) return;
                let initSecond = this.second;
                let that = this;
                window.Countdown = setInterval(_ => {
                    if (initSecond <= 0){
                        clearInterval(window.Countdown);
                        this.h = '00';
                        this.m = '00';
                        this.s = '00';
                        this.$emit('end');
                    }


                    initSecond--;


                    let hour = Math.floor(initSecond / 3600);
                    let minute = Math.floor(initSecond % 3600 / 60);
                    let second = Math.floor(initSecond % 60);

                    that.h = (hour < 10 ? '0' + hour : hour);

                    that.m = (minute < 10 ? '0' + minute : minute);

                    that.s = (second < 10 ? '0' + second : second);
                }, 1000)

            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .countNum{
        margin-left: 10px;
        display: inline-block;
        font-size: 15px;
        color: #FF4000;
    }
    span{
        display: inline-block;
        width:21px;
        height:19px;
        background:rgba(255,241,235,1);
        border-radius:2px;
        color: #FF4000;
        line-height: 19px;
        text-align: center;
    }
</style>
