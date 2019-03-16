export default {
    name: 'app',
    data: function () {
        return {
        }
    },
    methods: {

    },
    mounted() {
        let boxs = document.getElementsByClassName('box');
        if(this.groupNum < 2){
            boxs[0].className = 'box active';
            boxs[1].className = 'box unActive';
            boxs[2].className = 'box unActive';
            boxs[3].className = 'box unActive';
        } else if (this.groupNum > 1 && this.groupNum < 6) {
            boxs[0].className = 'box';
            boxs[1].className = 'box active';
            boxs[2].className = 'box unActive';
            boxs[3].className = 'box unActive';
        } else if ( this.groupNum > 5 && this.groupNum < 10){
            boxs[0].className = 'box';
            boxs[1].className = 'box';
            boxs[2].className = 'box active';
            boxs[3].className = 'box unActive';
        } else if ( this.groupNum >9) {
            boxs[0].className = 'box';
            boxs[1].className = 'box';
            boxs[2].className = 'box';
            boxs[3].className = 'box active';
        }
        let lines = document.getElementsByClassName('line');
        if(this.groupNum < 2){
        } else if (this.groupNum > 1 && this.groupNum < 6) {
            lines[0].className = 'line lineActive';
        } else if ( this.groupNum > 5 && this.groupNum < 10){
            lines[0].className = 'line lineActive';
            lines[1].className = 'line lineActive';
        } else if ( this.groupNum >9) {
            lines[0].className = 'line lineActive';
            lines[1].className = 'line lineActive';
            lines[2].className = 'line lineActive';
        }
        let nums = document.getElementsByClassName('progressNum')[0].children;
        if(this.groupNum < 2){
            nums[0].className = 'numActive';
        } else if (this.groupNum > 1 && this.groupNum < 6) {
            nums[1].className = 'numActive';
        } else if ( this.groupNum > 5 && this.groupNum < 10){
            nums[2].className = 'numActive';
        } else if ( this.groupNum >9) {
            nums[3].className = 'numActive';
        }
    },
    beforeDestroy: function () {

    },
    components: {}
}