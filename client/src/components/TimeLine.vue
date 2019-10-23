
<template>
  <div class="block">
    <h3 class="title">博客列表</h3>
    <div class="radio">
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>

    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.time"
      >
        <router-link :to="'/showblog/' + activity._id" tag="span">{{activity.title}}</router-link>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true,
      activities: []
    };
  },
  created() {
    this.axios.get("/api/blogs").then(blogs => {
      this.activities = blogs.data;
    });
  }
};
</script>

<style scoped>
.radio {
  margin: 45px 0 55px;
}
.el-timeline-item {
  cursor: pointer;
}
.el-timeline-item span:hover {
  color: crimson;
}
.title {
  margin: 20px 10px;
  font-weight: 400;
  font-size: 26px;
  line-height: 1.5;
  text-align: center;
  color: #555;
}
</style>