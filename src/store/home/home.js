import { reqCateGroyList, reqGetBannerList, reqFloorList } from "@/api";
const home = {
  namespaced: true,
  //创建action
  actions: {
    //通过api的接口调用，向服务器发送请求获取服务器的数据
    async categoryList({ commit }) {
      let result = await reqCateGroyList();
      if (result.code === 200) {
        commit("CATEGORYLIST", result.data);
      }
    },
    //获取home首页的数据
    async getBannerList({ commit }) {
      let result = await reqGetBannerList();
      if (result.code == 200) {
        commit("GETBANNERLIST", result.data);
      }
    },
    async getFloorList({ commit }) {
      let res = await reqFloorList();
      if (res.code == 200) {
        commit("GETFLOORLIST", res.data);
      }
    },
  },
  //创建mutaitions
  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    GETBANNERLIST(state, getBannerList) {
      state.bannerList = getBannerList;
    },
    GETFLOORLIST(state, getFloorList) {
      state.floorList = getFloorList;
    },
  },
  //创建getters
  getters: {},
  //创建state
  state: {
    categoryList: [],
    bannerList: [],
    floorList: [],
  },
};
export default home;
