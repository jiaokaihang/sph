import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogOut,
} from "../../api/index";
import { setToken, getToken, removeToken } from "../../utils/token";
const user = {
  //创建state
  namespaced: true,
  state: {
    code: "",
    token: getToken(),
    userInfo: {},
  },
  //创建action
  actions: {
    //获取验证码
    async getCode({ commit }, phone) {
      let res = await reqGetCode(phone);
      if (res.code == 200) {
        commit("GETCODE", res.data);
        return "ok";
      } else {
        return Promise.reject(new Error("fails"));
      }
    },
    //用户注册
    async userRegister({ commit }, user) {
      let res = await reqUserRegister(user);
      if (res.code == 200) {
        return "ok";
      } else {
        return Promise.reject(new Error("fails"));
      }
    },
    //用户登录
    async userLogin({ commit }, userData) {
      let res = await reqUserLogin(userData);
      if (res.code === 200) {
        console.log(res);
        commit("USERLOGIN", res.data.token);
        //持久化存储token
        setToken(res.data.token);
        return "ok";
      } else {
        return Promise.reject(new Error("falie"));
      }
    },
    async getUserInfo({ commit }) {
      let res = await reqUserInfo();
      if (res.code == 200) {
        commit("GETUSERINFO", res.data);
        return "ok";
      } else {
        return Promise.reject(new Error("faile"));
      }
    },
    //退出登录
    async logOut({ commit }) {
      let res = await reqLogOut();
      if (res.code == 200) {
        commit("CLEAR");
        return "ok";
      } else {
        return Promise.reject(new Error("falie"));
      }
    },
  },
  //创建mutaitions
  mutations: {
    GETCODE(state, codeList) {
      state.code = codeList;
    },
    USERLOGIN(state, token) {
      state.token = token;
    },
    GETUSERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    CLEAR(state) {
      //把仓库相关信息清空
      state.token = "";
      state.userInfo = {};
      //把本地存储清空
      removeToken();
    },
  },
  //创建getters
  getters: {},
};
export default user;
