import {reqCategoryList} from '@/api'

//存储数据
const state={
    //TypeNav组件的数据
    categoryList:[],
}

//处理action
const actions={
    //通过接口函数向服务器发请求
    async categoryList({commit}){
        const result=await reqCategoryList()
        if(result.code===200){
            commit('CATEGORYLIST',result.data)
        }
    }
}

//修改state
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    }
}


//计算属性，简化仓库数据
const getters={}

export default{
    state,
    mutations,
    actions,
    getters,
}