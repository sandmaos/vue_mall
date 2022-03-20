import { reqGetSearchInfo } from "@/api"
//存储数据
const state = {
    searchList: {},
}

//处理action
const actions = {
    //获取search模块
    async getSearchList({ commit }, params) {
        //params为dispatch派发时的第二个参数
        const result = await reqGetSearchInfo(params)
        if (result.code === 200) {
            commit('SEARCHLIST', result.data)
        }
    }
}

//修改state
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}

//计算属性，简化仓库数据
const getters = {
    //state为当前仓库的state
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}