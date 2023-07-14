<template>
  <div>
    <!-- 三级联动 已注册全局组件，不需要在引用 -->
    <TypeNav />
    <ListContainer />
    <br />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />

    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer/ListContainer.vue";
import TodayRecommend from "./TodayRecommend/TodayRecommend.vue";
import Rank from "./Rank/Rank.vue";
import Like from "./like/Like.vue";
import Floor from "./floor/Floor.vue";
import Brand from "./brand/Brand.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand },
  mounted() {
    this.$store.dispatch("homeAbount/getFloorList");
    // this.$store.dispatch("userAbount/getUserInfo");
  },
  computed: {
    ...mapState("homeAbount", ["floorList"]),
  },
};
</script>

