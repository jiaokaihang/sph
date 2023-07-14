import Home from "../pages/Home/Home.vue";
import Search from "../pages/Search/Search.vue";
import Login from "../pages/Login/Login.vue";
import Register from "../pages/Register/Register.vue";
import Detail from "../pages/Detail/Detail.vue";
import AddCartSuccess from "../pages/AddCartSuccess/AddCartSuccess.vue";
import ShopCart from "../pages/ShopCart/ShopCart.vue";
import Trade from "../pages/Trade/Trade.vue";
import Pay from "../pages/Pay/Pay.vue";
import PaySuccess from "../pages/PaySuccess/PaySuccess.vue";
import Center from "../pages/Center/Center.vue";
//引入二级路由组件
import MyOrder from "../pages/Center/myOrder/MyOrder.vue";
import GroupOrder from "../pages/Center/groupOrder/GroupOrder.vue";
export default [
  {
    name: "center",
    path: "/center",
    component: Center,
    //添加一个meta元信息
    meta: { show: true },
    children: [
      {
        name: "myorder",
        path: "myorder",
        component: MyOrder,
      },
      {
        name: "grouporder",
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    name: "paysuccess",
    path: "/paysuccess",
    component: PaySuccess,
    //添加一个meta元信息
    meta: { show: true },
  },
  {
    name: "pay",
    path: "/pay",
    component: Pay,
    //添加一个meta元信息
    meta: { show: true },
  },
  {
    name: "trade",
    path: "/trade",
    component: Trade,
    //添加一个meta元信息
    meta: { show: true },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
    //添加一个meta元信息
    meta: { show: true },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
    //添加一个meta元信息
    meta: { show: true },
  },
  {
    name: "detail",
    path: "/detail/:id",
    component: Detail,
    //添加一个meta元信息
    meta: { show: true },
  },
  {
    name: "home",
    path: "/home",
    component: Home,
    //添加一个meta元信息
    meta: { show: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/",
    redirect: "/home",
  },
];
