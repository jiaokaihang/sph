<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="changLeave" @mouseenter="entershow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: current == index }"
              >
                <h3 @mouseenter="changIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: current === index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  //组件挂载完毕，发送axios请求
  data() {
    return {
      //存储用户鼠标上哪一个分类
      current: -1,
      show: true,
    };
  },
  mounted() {
    //当组件实例挂在的时候讲true改为false
    if (this.$route.name != "home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState("homeAbount", ["categoryList"]),
  },
  methods: {
    //throttle这里注意不要使用箭头函数，可能会出现上下文this问题
    changIndex: throttle(function (index) {
      //鼠标进入修改响应式Current数据
      // alert(index);
      //index，鼠标以上某一个一级分类的元素的索引值
      this.current = index;
      //正常情况（用户慢慢的操作）鼠标进入每一个一级h3，都会触发鼠标进入事件
      //非正常情况（用户操作过快）：本身全部的一级分类都应该触发鼠标事件，但是经过测试，只有部分h3触发
      //就是由于用户行为过快，导致浏览器反应不过来
      // console.log("鼠标进入" + index);
    }, 50),
    goSearch(event) {
      // this.$router.push("/search");
      //把子节点中的a标签，我们添加上自定义属性data-catagoryName,其他节点是没有的
      let element = event.target;
      //获取到当前出发这个事件的节点，需要带有data-catagoryName这样的属性
      //节点中有一个dataset属性，可以获得到节点的自定义属性和属性值
      console.log(element.dataset);
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      if (categoryname) {
        //整理路由跳转的参数
        let loction = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }

        //判断如果路由传参有params参数的话，捎带脚带过去
        if (this.$route.params) {
          loction.params = this.$route.params;
          //整理完参数
          loction.query = query;
          //路由跳转
          this.$router.push(loction);
        }
        console.log("####", loction);
      }
    },
    //当鼠标移入时进行显示
    entershow() {
      this.show = true;
    },
    //当鼠标移除时进行隐藏
    changLeave() {
      this.current = -1;
      if (this.$route.name != "home") {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              text-decoration: none;
            }
            // .jkh:hover {

            // }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }

    // 过渡动画的样式
    // 过渡动画的进入状态
    .sort-enter,
    .sort-leave-to {
      height: 0px;
    }
    //过渡动画结束状态(开始)
    .sort-enter-to,
    .sort-leave {
      height: 461px;
    }
    // 定义时间速率
    .sort-enter-active,
    .sort-leave-active {
      transition: all 0.5s linear;
    }
  }
}
</style>