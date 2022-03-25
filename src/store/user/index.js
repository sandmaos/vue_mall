import {reqGetCode,reqRegister, reqLogin ,reqUserInfo,reqLogout} from "@/api"
import {setToken,getToken,deleteToken} from '@/utils/token.js';
//存储数据
const state = {
    code: '',
    token:getToken(),
    userInfo:{}
}

//处理action
const actions = {
    async getCode({ commit },phone) {
        const result = await reqGetCode(phone)
        if (result.code === 200) {
            commit('GETCODE', result.data)
        }else{
            return Promise.reject(new Error('fail'))
        }
    },

    async userRegister({ commit },user) {
        const result = await reqRegister(user)
        if (result.code === 200) {
            return 'Success'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    //登录api [返回token为用户唯一身份]
    async userLogin({ commit },user) {
        const result = await reqLogin(user)
        if (result.code === 200) {
            commit('USERLOGIN',result.data.token)
            setToken(result.data.token) //存token
            return 'Success'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },

    //登录成功验证api,home页面调用
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 200) {
            commit('GETUSERINFO',result.data)
            return 'Success'
        }
        else{
            return Promise.reject(new Error('fail'))
        }
    },
    //退出
    async getLogout({ commit }) {
        //通知服务器清除token
        const result = await reqLogout()
        if (result.code === 200) {
            commit('CLEAR')
            return 'Success'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
}

//修改state
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, user) {
        state.userInfo = user
    },
    CLEAR(state){
        state.token=''
        state.userInfo={}
        deleteToken()
    }
}

//计算属性，简化仓库数据
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters,
}