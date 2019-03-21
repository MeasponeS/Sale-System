import Storage from 'good-storage'
import Cookies from 'js-cookie'
import Config from '../config/app'
import {initUrlParams} from './app.js'

/*
 *
 * @param key
 * @returns {*}
 */
export function getUserInfo(key = null){
    let userInfo = Storage.get(Config.storageUserKey);
    if(key)return userInfo.hasOwnProperty(key) ? userInfo[key] : null;
    return userInfo;
}


/**
 *
 * @param user
 * @returns {*}
 */
export function saveUserInfo(user){
    Storage.set(Config.storageUserKey,user);
    return user;
}

/**
 *
 * @param key
 * @returns {*}
 */
export function getUrlInfo(key = null){
    if(!window.URLPARAMS)initUrlParams();
    if(key)return window.URLPARAMS.hasOwnProperty(key) ? window.URLPARAMS[key] : null;
    return window.URLPARAMS;
}


/**
 *
 * @returns {*}
 */
export function getToken() {
    return Cookies.get(Config.tokenKey) || "";
}

/**
 *
 * @param token
 * @returns {*}
 */
export function setToken(token) {
    return Cookies.set(Config.tokenKey, token ,{ expires: Config.cookiesExpires })
}



export function setCurrentPage(key) {
    return Cookies.set('currentPage', key ,{ expires: Config.cookiesExpires })
}


export function getBeforePage() {
    return Cookies.get('currentPage') || "";
}


/**
 *
 * @returns {*}
 */
export function removeToken() {
    return Cookies.remove(Config.tokenKey)
}



export function isLogin() {
    return getToken() && getUserInfo()
}
