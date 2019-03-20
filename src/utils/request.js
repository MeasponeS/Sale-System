import Axios from 'axios'
import Config from '../config/app.js'
import { Toast } from 'vant';
import {getToken,removeToken} from '../utils/dataStorage.js'

const service = Axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix,
    headers: {
        'Accept': '*/*',

    },
    timeout: Config.timeout
});

// let toast = Toast.loading({
//     mask: true,
//     message: '加载中...'
// });

service.defaults.retry = Config.requestRetry;
service.defaults.retryDelay = Config.requestRetryDelay;

service.interceptors.request.use(
    config => {
        if(!config.closeLoading){
            //window.loadingInstance = toast;
        }

        let noParameters = config.url.indexOf('?')  == -1;
        //config.headers['X-Token'] = getToken() //

        config.url = noParameters ? config.url+'?access_token=' + getToken(): config.url+'&access_token='+ getToken();

        return config
    },
    error => {
        Promise.reject(error)
    }
);

service.interceptors.response.use(
    response => {
        const res = response;

        if(!response.config.closeLoading){
            setTimeout(_=>{
                //window.loadingInstance.clear();
            },400);
        }

        if (res.status !== 200) {
            Toast('数据返回出错');
            //return Promise.reject('error')
        } else {
            if(res.data.resultCode != 200){
                Toast(res.data.message);
                if(res.data.resultCode == 402){
                    removeToken();
                    setTimeout(_=>{
                        window.location.href = './login.html';
                    },2000)
                }
                return Promise.reject('error');
            }

            return res.data.data
        }
    },
    error => {
        setTimeout(_=>{
            //window.loadingInstance.clear();
        },300)
        Toast(error.message);
        return Promise.reject(error)
    }
)

export default service
