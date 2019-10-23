<template>
  <section class="animated fadeIn fast">
    <h3 class="title">{{singleBlog.title}}</h3>
    <ul class="tags">
      <li>
        <i class="fa fa-pencil"></i>发表于{{singleBlog.time.slice(0,10)}}
      </li>
      <span class="split">|</span>
      <li>
        <i class="fa fa-file"></i>分类于<span v-for="(item,i) in singleBlog.categories" :key="i">{{item}} </span>
      </li>
      <span class="split">|</span>
      <li>
        <i class="fa fa-eye"></i>阅读数7419
      </li>
      <span class="split">|</span>
      <li>
        <i class="fa fa-heart"></i>喜欢数148
      </li>
    </ul>
    <p class="content" v-html="singleBlog.content"></p>
    <!-- 分类开始 -->
    <ul class="categories">
      <li class="item" v-for="(item,index) in singleBlog.categories" :key="index">#{{item}}</li>
    </ul>
    <!-- 分类结束 -->
    <div
      class="like"
      :class="{isLike:isClick,animated:isClick,heartBeat:isClick}"
      @click="changeLike"
    >
      <i class="fa fa-heart">喜欢</i>
      <span class="split">|</span>
      <span class="likeTotal">{{likeTotal}}</span>
    </div>
    <el-row>
      <router-link :to="{path:'/editblog',query:{id:$route.query.id}}">
        <el-button icon="el-icon-edit" size="mini"></el-button>
      </router-link>
      <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteSingleBlog"></el-button>
    </el-row>
  </section>
</template>
<script>
export default {
  data() {
    return { // 当前的路由对象id参数
      singleBlog: {}, // 单条博客数据
      isClick: false, // 用户是否点击了喜欢
      likeTotal: 0 // 喜欢的数量
    };
  },
  beforeMouted() {
    this.axios.get("/api/blogs/singleblog/" + this.$route.query.id).then(res => {
      console.log(res)
      console.log(res.data)
      this.singleBlog = res.data;
    });
  },
  methods: {
    //删除博客
    deleteSingleBlog() {
      this.$confirm("你要删除这条博客吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // axios 请求删除接口
        this.axios
          .get("/api/delete/" + this.$route.query.id)
          .then(res => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          // 删除成功跳转到首页
          .then(() => {
            this.$router.push({ path: "/" });
          });
      });
    },
    goBack() {
      //路由往后
      this.$router.go(-1);
    },
    // 用户点击喜欢，数量增加，取消减少数量
    changeLike() {
      this.isClick = !this.isClick;
      if (this.isClick) {
        this.likeTotal++;
      } else {
        this.likeTotal--;
      }
    }
  }
};
</script>
<style scoped>
.el-button {
  margin-right: 5px;
}
section .tags {
  display: flex;
  justify-content: center;
}
/* 标题 */
section .title {
  margin: 20px 0 10px;
}
section .title {
  text-align: center;
  color: #555;
  font-size: 26px;
  line-height: 1.2;
}
/* 标签 */
.tags {
  margin: 20px 0 10px;
}
.tags .split {
  margin: 0 0.2em;
  font-size: 12px;
  color: #999;
}
.tags li {
  font-size: 12px;
  color: #999;
}
.tags li i {
  margin-right: 3px;
}

/* 博客内容 */
section .content {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
  line-height: 2;
}

section .categories {
  cursor: pointer;
  display: flex;
  margin: 130px 0 30px;
}
section .categories .item {
  padding: 1px 5px;
  background: #f5f5f5;
  font-size: 13px;
  color: #555;
  margin-right: 10px;
  line-height: 2;
}

/* 喜欢按钮 */
.like {
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 58px;
  border: 1px solid #ea6f5a;
  border-radius: 40px;
  font-size: 19px;
  color: #ea6f5a;
  box-sizing: border-box;
  cursor: pointer;
}

.like i {
  padding-left: 5px;
}
.like .split {
  padding: 0 8px;
}

/* 点击喜欢后的样式 */
.isLike {
  background: #ea6f5a;
  color: #fff;
}
</style>
