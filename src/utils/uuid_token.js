import { v4 as uuidv4 } from "uuid";
export const getUUID = () => {
  //要随机生成一个字符串，且每次执行不能发生变化，游客身份永久存储

  //先从本地存储中获取uuid ，(看看本地存储里面有没有uuid)
  let uuid_token = localStorage.getItem("UUIDTOKEN");

  //如果没有
  if (!uuid_token) {
    //那么我就生成一个游客临时id
    uuid_token = uuidv4();
    //本地存储一次
    localStorage.setItem("UUIDTOKEN", uuid_token);
  }
  return uuid_token;
};
