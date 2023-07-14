//所有的接口统一管理
import requests from "./request";

import mockAjax from "./mockAjax";
//三级联动的接口
//暴露一个函数

export const reqCateGroyList = () => {
  //发请求
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

//获取轮播图数据

export const reqGetBannerList = () => {
  return mockAjax({
    url: "/banner",
    method: "get",
  });
};
//获取floor数据
export const reqFloorList = () => {
  return mockAjax({
    url: "/floor",
    method: "get",
  });
};

// 获取搜索search模块数据

export const reqGetSearchInfo = (params) => {
  return requests({
    url: "/list",
    method: "post",
    data: params,
  });
};

//获取产品信息详情的接口

export const reqGoodsList = (skuid) => {
  return requests({
    url: `/item/${skuid}`,
    method: "get",
  });
};

//将商品添加到购物车中，（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
};

//获取购物车列表数据
export const reqCartList = () => {
  return requests({
    url: "/cart/cartList",
    method: "get",
  });
};

//删除购物产品
export const reqDeleteCartById = (skuId) => {
  return requests({
    url: `/cart/deleteCart/${skuId}`,
    method: "DELETE",
  });
};

//修改商品的选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => {
  return requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });
};

//获取手机号
export const reqGetCode = (phone) => {
  return requests({
    url: `/user/passport/sendCode/${phone}`,
    method: "get",
  });
};

//用户注册
export const reqUserRegister = (data) => {
  return requests({
    url: "/user/passport/register",
    data,
    method: "post",
  });
};
//用户登录
export const reqUserLogin = (data) => {
  return requests({
    url: "/user/passport/login",
    data,
    method: "post",
  });
};
//获取用户信息

export const reqUserInfo = () => {
  return requests({
    url: "/user/passport/auth/getUserInfo",
    methodL: "get",
  });
};

//退出登录
export const reqLogOut = () => {
  return requests({
    url: "/user/passport/logout",
    method: "get",
  });
};

//获取用户地址信息
export const reqAddressInfo = () => {
  return requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get",
  });
};

//获取商品清单
export const reqOrderInfo = () => {
  return requests({
    url: "/order/auth/trade",
    method: "get",
  });
};

//订单提交信息
export const reqSubmitOrder = (tradeNo, data) => {
  return requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post",
  });
};

//获取支付信息
export const reqPayInfo = (orderId) => {
  return requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get",
  });
};

//查询订单状态
export const reqPayStatus = (orderId) => {
  return requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get",
  });
};

//获取个人中心数据

export const reqMyOrderList = (page, limit) => {
  return requests({
    url: `/order/auth/${page}/${limit}`,
    method: "get",
  });
};
