//首先引入mockjs模块

import Mock from "mockjs";
//将json格式引入进来
import banner from "./banner.json";
import floor from "./floor.json";

//mock数据 第一个参数是请求地址，第二个参数是请求的数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
