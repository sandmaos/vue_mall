import { reqCartList, reqDeleteCartById,reqUpdateCheckedById } from "@/api"
//存储数据
const state = {
    cartList: [],
}

//处理action
const actions = {
    async getCartList({ commit }) {
        const result = await reqCartList()
        if (result.code === 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    //删除购物车产品
    async deleteCartById({ commit }, skuId) {
        const result = await reqDeleteCartById(skuId)
        if (result.code === 200) {
            return 'success delete'
        } else Promise.reject(new Error('fail'))
    },
    //更新选中状态
    async updateCheckedById({ commit }, {skuId, isChecked}) {
        const result = await reqUpdateCheckedById(skuId,isChecked)
        if (result.code === 200) {
            return 'success checked'
        } else Promise.reject(new Error('fail'))
    },
}

//修改state
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}

//计算属性，简化仓库数据
const getters = {
    cartList(state) {
        return state.cartList[0] || []
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}