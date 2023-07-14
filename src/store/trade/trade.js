import { reqAddressInfo, reqOrderInfo } from "../../api/index";
const trade = {
  //创建state
  namespaced: true,
  state: {
    addressList: [],
    orderList: {},
  },
  //创建action
  actions: {
    //获取用户地址信息
    async getAddressList({ commit }) {
      let res = await reqAddressInfo();
      if (res.code == 200) {
        console.log("获取到的地址", res);
        commit("GETADDRESSLIST", res.data);
        return "ok";
      } else {
        return Promise.reject(new Error("faile"));
      }
    },
    //获取商品清单的数据
    async getOrderList({ commit }) {
      let res = await reqOrderInfo();
      if (res.code == 200) {
        console.log("获取到的信息", res);
        commit("GETORDERLIST", res.data);
        return "ok";
      } else {
        return Promise.reject(new Error("faile"));
      }
    },
  },
  //创建mutaitions
  mutations: {
    GETADDRESSLIST(state, addressList) {
      state.addressList = addressList;
    },
    GETORDERLIST(state, orderList) {
      state.orderList = orderList;
    },
  },
  //创建getters
  getters: {
    addressInfo(state) {
      return state.addressList;
    },
    orderInfo(state) {
      return state.orderList;
    },
  },
};
export default trade;
