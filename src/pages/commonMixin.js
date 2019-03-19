import {getToken,getUserInfo,getUrlInfo} from '../utils/dataStorage.js'
import {wechatSignature,shareFriendQ,shareFriend} from '../utils/weixin.js'
import {wxSignature} from "../api/wechat";
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
        let userToken = getToken();
        let userInfo = getUserInfo();
        if(userToken && userInfo){
            this.USERINFO = userInfo;
        }else{
            this.USERINFO = false
        }


        wxSignature({url:window.location.href.split('?')[0]}).then(r=>{
            console.log(r);
        }).catch(_=>{})

    },
    beforeDestroy: function () {

    },
    components: {}
}
