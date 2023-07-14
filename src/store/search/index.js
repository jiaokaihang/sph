import { reqGetSearchInfo } from "../../api/index";
const search = {
  namespaced: true,
  //创建action
  actions: {
    //获取search模块的数据
    async getSearchList({ commit }, params = {}) {
      let res = await reqGetSearchInfo(params);

      if (res.code == 200) {
        commit("GETSEARCHLIST", res.data);
      }
    },
  },
  //创建mutaitions
  mutations: {
    GETSEARCHLIST(state, searchList) {
      state.searchList = searchList;
    },
  },
  //创建getters
  getters: {
    goodsList(state) {
      return state.searchList.goodsList || [];
    },
    attrsList(state) {
      return state.searchList.attrsList;
    },
    trademarkList(state) {
      return state.searchList.trademarkList;
    },
  },
  //创建state
  state: {
    searchList: {},
  },
};
export default search;
