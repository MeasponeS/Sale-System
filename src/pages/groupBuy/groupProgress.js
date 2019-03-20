export default {
    name: 'app',
    data: function () {
        return {
            //regularLIst:[],   // 返利规则列表
        }
    },
    methods: {
        className(step){
            let num = this.groupNum;
            let list = this.regularLIst;
            switch (step) {
                case 0:
                    if(num < list[0].highCount){
                        return 'active'
                    } else {
                        return ''
                    };
                break;
                case 1:
                    if(num < list[0].highCount){
                        return 'unActive'
                    } else if(num > list[1].lowCount && num < list[1].highCount){
                        return 'active'
                    } else {
                        return ''
                    };
                break;
                case 2:
                    if(num < list[0].highCount){
                        return 'unActive'
                    } else if(num > list[1].lowCount && num < list[1].highCount){
                        return 'unActive'
                    } else if(num > list[2].lowCount && num < list[2].highCount){
                        return 'active'
                    } else {
                        return ''
                    };
                break;
                case 3:
                    if(num < list[0].highCount){
                        return 'unActive'
                    } else if(num > list[1].lowCount && num < list[1].highCount){
                        return 'unActive'
                    } else if(num > list[2].lowCount && num < list[2].highCount){
                        return 'unActive'
                    } else {
                        return 'active'
                    }
            }

        },

        className1(step){
            let num = this.groupNum;
            let list = this.regularLIst;
            switch (step) {
                case 0:
                    if(num < list[0].highCount){
                        return 'numActive'
                    }
                    break;
                case 1:
                    if(num > list[1].lowCount && num < list[1].highCount){
                        return 'numActive'
                    }
                    break;
                case 2:
                    if(num > list[2].lowCount && num < list[2].highCount){
                        return 'numActive'
                    }
                    break;
                case 3:
                    if(num > list[3].lowCount){
                        return 'numActive'
                    }
            }
        },

        className2(step){
            let num = this.groupNum;
            let list = this.regularLIst;
            switch (step) {
                case 0:
                    if(num < list[0].highCount){
                        return ''
                    } else {
                        return 'lineActive'
                    }
                    break;
                case 1:
                    if(num > list[2].lowCount ){
                        return 'lineActive'
                    }
                    break;
                case 2:
                    if(num > list[3].lowCount){
                        return 'lineActive'
                    }
            }
        }
    },
    mounted() {

    },
    beforeDestroy: function () {

    },
    components: {}
}