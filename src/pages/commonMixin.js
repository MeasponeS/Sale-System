import {getToken,getUserInfo,getUrlInfo} from '../utils/dataStorage.js'
import {wechatSignature,shareFriendQ,shareFriend} from '../utils/weixin.js'
import {signature} from "../api/wechat";
export default {
    data: function () {
        return {
            USERINFO:false
        }
    },
    created(){

    },
    methods: {

    },
    mounted() {
        //this.activityId = getUrlInfo('activityId');
        let userToken = getToken();
        let userInfo = getUserInfo();
        if(userToken && userInfo){
            this.USERINFO = userInfo;
        }else{
            this.USERINFO = false
        }


        // signature({}).then(r=>{
        //
        // }).catch(_=>{})

    },
    beforeDestroy: function () {

    },
    components: {}
}
