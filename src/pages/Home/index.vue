<template>
  <div>
    <!-- 三级联动组件使用，已在main.js注册 -->
    <TypeNav/>
    
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorList" :key='floor.id' :floorList='floor'/>
    <Brand/>

  </div>
</template>

<script>
//引入其余组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

import {mapState} from 'vuex'

export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed: {
    ...mapState({floorList: (state) => state.home.floorList}),
  },
  mounted() {
    //派发action获取floor组件数据
    this.$store.dispatch("getFloorList")
  },
}
</script>

<style>

</style>