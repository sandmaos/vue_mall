import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'

//存储数据
const state={
    //TypeNav组件的数据
    categoryList:[],
    //轮播图数组
    bannerList:[],
    //floor数据
    floorList:[],
}

//处理action
const actions={
    //通过接口函数向服务器发请求
    async categoryList({commit}){
        const result=await reqCategoryList()
        if(result.code===200){
            commit('CATEGORYLIST',result.data)
        }
    },
    //获取首页轮播图
    async getBannerList({commit}){
        const result=await reqGetBannerList()
        if(result.code===200){
            commit('GETBANNERLIST',result.data)
        }
    },
    //floor数据
    async getFloorList({commit}){
        const result=await reqFloorList()
        if(result.code===200){
            commit('GETFLOORLIST',result.data)
        }
    },
}

//修改state
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    },
}


//计算属性，简化仓库数据
const getters={}

export default{
    state,
    mutations,
    actions,
    getters,
}