import VueRouter from "vue-router";
import routers from "./routers";
//引入store
import store from "@/store";

const router = new VueRouter({
  routes: routers,
  scrollBehavior() {
    //返回的这个y=0代表的是滚动条在最上方
    return { x: 0, y: 0 };
  },
});
router.beforeEach(async (to, from, next) => {
  next();
  console.log("###", store.state.userAbount.token);
  let token = store.state.userAbount.token;
  //获取用户信息
  let name = store.state.userAbount.userInfo.name;
  if (token) {
    //如果用户登陆了还想去login，这是不可能的
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      //登陆了，但去的不是login,去其他地方search。。。
      // next();
      //如果用户名有
      if (name) {
        next();
      } else {
        //如果没有用户信息，派发action让仓库存储用户信息在跳转
        try {
          //获取用户信息成功放行
          await store.dispatch("userAbount/getUserInfo");
          next();
        } catch (error) {
          alert("失败");
          //token失效，获取不到用户信息
          //清除token
          await store.dispatch("userAbount/logOut");
          next("/login");
        }
      }
    }
  } else {
    next();
  }
});
export default router;
