import Vue from 'vue'
import App from './Index.vue'
import '../common'
import {setToken,getBeforePage} from "../../utils/dataStorage";
import Config from '../../config/app'
import {Toast} from 'vant'
import {wxSignature,getTokenMethods} from "../../api/wechat";



https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf291b84e7b53c730&redirect_uri=https%3A%2F%2Fwxauth.hulian120.com%2Fopen%2FgetCodeFor&response_type=code&scope=snsapi_userinfo&state=hushijia&uin=MTg2NzI1MjIyMA%3D%3D&key=d9eb163415b67d2f60971f4374e6c13c9b069664bf94b9c7e5a26e5b9c2fdea2f3c32918034f0df68c355d49ba8cc867&pass_ticket=BINaKVhoNMODX9YGPgVa9nJdQ7rHV6g/mZscOLIOjlZgqFfrzCiDHHRGlJnIxs395muh9+b36D8/6f1AppzKCA==






if(!window.URLPARAMS.hasOwnProperty('code')){
    alert('meicode')
    wxSignature({url:window.location.href.split('?')[0]}).then(r=>{
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="  +
            r.signature.appId  + "&redirect_uri=" + encodeURIComponent('https://wxauth.hulian120.com/open/getCodeFor')  +   "&response_type=code&scope=snsapi_userinfo&state=hushijia#wechat_redirect"
    }).catch(_=>{})
} else {
    alert('youcode')
    if(window.URLPARAMS.hasOwnProperty('needJump') && getBeforePage()){
        alert('youjump')
        let server_url = encodeURIComponent('https://testsale.hulian120.com/sale/api/wx/login');
        getTokenMethods({
            actId:Config.activityId,
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
