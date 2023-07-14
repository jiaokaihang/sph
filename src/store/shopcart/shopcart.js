import {
  reqCartList,
  reqDeleteCartById,
  reqUpdateCheckedById,
} from "../../api/index";
const shopcart = {
  namespaced: true,
  //创建action
  actions: {
    //获取search模块的数据
    async getShopCartList({ commit }) {
      let res = await reqCartList();

      if (res.code == 200) {
        commit("GETCARTLIST", res.data);
      }
    },
    async deleteCartListBySkuId({ commit }, skuId) {
      let res = await reqDeleteCartById(skuId);
      if (res.code == 200) {
        return "ok";
      } else {
        return Promise.reject(new Error("fail"));
      }
    },
    async updateCheckedById({ commit }, { skuId, isChecked }) {
      let res = await reqUpdateCheckedById(skuId, isChecked);
      if (res.code == 200) {
        return "ok";
      } else {
        return Promise.reject(new Error("fail"));
      }
    },
    //删除全部勾选的id
    deleteAllCheckedCart({ dispatch, getters }) {
      let PromiseAll = [];
      getters.cartList.cartInfoList.forEach((item) => {
        let promise =
          item.isChecked === 1
            ? dispatch("deleteCartListBySkuId", item.skuId)
            : "";
        PromiseAll.push(promise);
      });
      return Promise.all(PromiseAll);
    },
    //全选or全不选
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
      let PromiseAll = [];
      state.cartList[0].cartInfoList.forEach((item) => {
        let promise = dispatch("updateCheckedById", {
          skuId: item.skuId,
          isChecked,
        });
        PromiseAll.push(promise);
      });
      return Promise.all(PromiseAll);
    },
  },
  //创建mutaitions
  mutations: {
    GETCARTLIST(state, cartList) {
      state.cartList = cartList;
    },
  },
  //创建getters
  getters: {
    cartList(state) {
      return state.cartList[0] || {};
    },
  },
  //创建state
  state: {
    cartList: [],
  },
};
export default shopcart;
