import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api"
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
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        const result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code === 200) {
            return 'success checked'
        } else Promise.reject(new Error('fail'))
    },
    //删除全部勾选的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        //context小仓库
        var promiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            var promise = item.isChecked === 1 ? dispatch('deleteCartById', item.skuId) : ''
            promiseAll.push(promise)
        });
        //都成功返回true，有失败都失败
        return Promise.all(promiseAll)
    },
    //修改全部选中
    updateAllCheckedCart({ dispatch, state }, isChecked) {
        var promiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            var promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked: isChecked })
            promiseAll.push(promise)
        });
        //都成功返回true，有失败都失败
        return Promise.all(promiseAll)
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