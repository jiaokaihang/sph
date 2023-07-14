import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
//引入store
import store from "./store/index";
//注册一个全局组件
import TypeNav from "./components/TypeNav/TypeNav.vue";
import Carousel from "./components/Carousel/Carousel.vue";
// import Pagination from "./components/pagination/Pagination.vue";
//引入element-ui
import { Button, MessageBox, Pagination } from "element-ui";
Vue.component("atguigu-button", Button);
//测试
import { reqCateGroyList } from "../src/api/index";
//引入mock数据
import "../src/mock/mockServer";

//引入swiper央视
import "swiper/css/swiper.css";

//统一接收api里面的所有请求
import * as API from "./api/index";
console.log(API);
reqCateGroyList();

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// Vue.component(Pagination.name, Pagination);
Vue.use(Pagination);
//引用弹框---讲方法
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false;

Vue.use(VueRouter);

const vm = new Vue({
  el: "#app",
  render: (h) => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router: router,
  store,
});
