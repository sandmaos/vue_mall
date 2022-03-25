import { reqUserAddress,reqOrderInfo } from "@/api"
//存储数据
const state = {
    address: [],
    order:{},
}

//处理action
const actions = {
    async getUserAddress({ commit }) {
        //params为dispatch派发时的第二个参数
        const result = await reqUserAddress()
        if (result.code === 200) {
            commit('GETUSERADDRESS', result.data)
        }
    },
    async getOrderInfo({ commit }) {
        //params为dispatch派发时的第二个参数
        const result = await reqOrderInfo()
        if (result.code === 200) {
            commit('GETORDERINFO', result.data)
        }
    },
}

//修改state
const mutations = {
    GETUSERADDRESS(state,address){
        state.address=address
    },
    GETORDERINFO(state,order){
        state.order=order
    },
}

//计算属性，简化仓库数据
const getters = {
    //state为当前仓库的state
  
}

export default {
    state,
    mutations,
    actions,
    getters,
}