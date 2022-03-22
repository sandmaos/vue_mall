import { reqGetDetail } from "@/api"
//存储数据
const state = {
    goodsInfo: {}
}

//处理action
const actions = {
    //获取search模块
    async getDetail({ commit }, id) {
        //params为dispatch派发时的第二个参数
        const result = await reqGetDetail(id)
        if (result.code === 200) {
            commit('GETDETAIL', result.data)
        }
    }
}

//修改state
const mutations = {
    GETDETAIL(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}

//计算属性，简化仓库数据
const getters = {
    //路径导航简化
    categoryView(state) {
        //还没发请求的时候数据至少是一个{}
        return state.goodsInfo.categoryView || {}
    },
    //产品信息
    skuInfo(state) {
        //还没发请求的时候数据至少是一个{}
        return state.goodsInfo.skuInfo || {}
    },
    //产品售卖属性
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}