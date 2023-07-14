import Vue from "vue";
import Vuex from "vuex";
import search from "./search";
import home from "./home/home";
import detail from "./detail/detail";
import shopcart from "./shopcart/shopcart";
import user from "./user/user";
import trade from "./trade/trade";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    searchAbount: search,
    homeAbount: home,
    detailAbount: detail,
    shopcartAbount: shopcart,
    userAbount: user,
    tradeAbount: trade,
  },
});

export default store;
