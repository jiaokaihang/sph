import { reqGoodsList, reqAddOrUpdateShopCart } from "../../api/index";
import { getUUID } from "../../utils/uuid_token";
const detail = {
  namespaced: true,
  //创建action
  actions: {
    async goodInfo({ commit }, skuid) {
      let res = await reqGoodsList(skuid);
      if (res.code == 200) {
        commit("GETGOODINFO", res.data);
      }
    },
    //将产品添加到购物车中
    //加入购物车以后（发请求）前台将参数带给服务器
    //因为服务器没有返回其他的数据，所以不需要三连环存储数据
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
      let res = await reqAddOrUpdateShopCart(skuId, skuNum);
      if (res.code == 200) {
        // commit("ADDORUPDATESHOPCART", res.data);
        return "ok";
      } else {
        //代表加入购物车失败
        return Promise.reject(new Error("fail"));
      }
    },
  },
  //创建mutaitions
  mutations: {
    GETGOODINFO(state, goodInfo) {
      state.goodInfo = goodInfo;
    },
    // ADDORUPDATESHOPCART(state, addOrUpdateShopCart) {
    //   state.addOrUpdateShopCart = addOrUpdateShopCart;
    // },
  },
  //创建getters
  getters: {
    categoryView(state) {
      return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
      return state.goodInfo.skuInfo || {};
    },
  },
  //创建state
  state: {
    goodInfo: {},
    //游客临时身份
    uuid_token: getUUID(),
  },
};
export default detail;
