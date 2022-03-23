import { reqCartList } from "@/api"
//存储数据
const state = {
    cartList: [],
}

//处理action
const actions = {
    async getCartList({commit}) {
        const result = await reqCartList()
        if (result.code === 200) {
            commit('GETCARTLIST', result.data)
        }
    }
}

//修改state
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList=cartList
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