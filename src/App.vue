<template>
  <div>
    <Header />
   
   <!-- 配置中间的组件 -->
    <router-view></router-view>

    <Footer v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    //通知vuex发请求，listData存在state中
    this.$store.dispatch("categoryList"); //送到vuex的action
  },
};
</script>

<style>
</style>
