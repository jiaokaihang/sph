<template>
  <div class="outer">
    <Header />
    <router-view></router-view>
    <!-- 在home，search中显示footer组件 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
  mounted() {
    //通知vuex，获取数据，存储在state中
    //派发一个action，获取商品的三级列表
    this.$store.dispatch("homeAbount/categoryList");
  },
};
</script>

<style>
</style>
