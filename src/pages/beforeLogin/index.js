import Vue from 'vue'
import App from './Index.vue'
import '../common'
import {setToken,getBeforePage} from "../../utils/dataStorage";
import {Toast} from 'vant'
import {wxSignature,getTokenMethods} from "../../api/wechat";

if(window.URLPARAMS.hasOwnProperty('state') && window.URLPARAMS.state == 'needJump'){
    window.display = 'none'
} else {
    window.display = 'block'
}


if(!window.URLPARAMS.hasOwnProperty('code')){
    wxSignature({url:window.location.href.split('?')[0]}).then(r=>{
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
            r.signature.appId  + "&redirect_uri=" + encodeURIComponent('https://wxauth.hulian120.com/open/getCodeFor')  +   "&response_type=code&scope=snsapi_userinfo&state=hushijia#wechat_redirect"
    }).catch(_=>{})
} else {
    if(window.URLPARAMS.hasOwnProperty('state') && window.URLPARAMS.state == 'needJump' && getBeforePage()){
        let server_url = encodeURIComponent('https://testsale.hulian120.com/sale/api/wx/login');
        getTokenMethods({
            actId:window.actId,
            code:window.URLPARAMS.code,
            mp:'hushijia',
            serverUrl:server_url,
            mobile:''
        }).then(r=>{
            setToken(r);
            Toast('登陆成功');
            window.setTimeout(()=>{
                window.location.href = getBeforePage()
            },200);
        }).catch(_=>{})
    }

}




new Vue({
    render: h => h(App)
}).$mount('#app')
