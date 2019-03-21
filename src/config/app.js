
 const devApiUrl = 'http://192.168.50.104:8081'; // 翔哥
// const devApiUrl = 'http://192.168.48.133:8081'; // 峰峰

//正式环境变量,注意修改
const proApiUrl = 'https://testsale.hulian120.com';



const nodeDevEnv = process.env.NODE_ENV=='development' ? true : false;
export default {
    apiUrl : nodeDevEnv ? devApiUrl : proApiUrl,
    apiPrefix : "",
    timeout:5000,
    designSize:375,//设计稿宽度 375 or 750
    cookiesExpires:7,
    activityId:1,
    countDown:60,//短信验证码倒计时
    tokenKey:'ACTIVITY_ACCESS_TOKEN',
    storageUserKey:'ACTIVITY_USER_STORAGE',
    requestRetry:4,
    //staticUrl:'https://hsj.hulian120.com',
    requestRetryDelay:800,
}
