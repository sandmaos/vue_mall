import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//引入小仓库
import home from './home'
import search from './search'

export default new Vuex.Store({
    //vuex仓库模块化管理
    modules:{
        home,
        search,
    }
})