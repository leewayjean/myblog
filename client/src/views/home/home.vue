<template>
  <div class="home animated fadeIn">
    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
    <article v-for="(blog,index) in filtedBlogs" :key="index">
      <section>
        <h3 class="title">
          <router-link :to="{path:'/showblog',query:{title:blog.title,id:blog._id}}" class="link">{{blog.title}}</router-link>
        </h3>
        <ul class="tags">
          <li>
            <i class="fa fa-pencil"></i>
            发表于{{blog.time.slice(0,10)}}
          </li>
          <span class="split">|</span>
          <li>
            <i class="fa fa-file"></i>分类于
            <span v-for="(item,i) in blog.categories" :key="i">{{item}}</span>
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
        <span>
          <router-link class="btn" :to="{path:'/showblog',query:{title:blog.title,id:blog._id}}">
            阅读全文
            <i class="fa fa-arrow-right"></i>
          </router-link>
        </span>
      </section>
      <img src="../../assets/logo.png" alt />
    </article>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      blogs: [], // 获取的博客数据
      search: "" // 搜索内容
    };
  },
  computed: {
    //按输入内容搜索并展示
    filtedBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search); //箭头函数的this指向在执行的时候绑定，指向此时的执行期上下文
      });
    }
  },
  methods: {
    getData() {
      this.axios.get("/api/blogs").then(res => {
        console.log(res);
        this.blogs = res.data;
      });
    }
  },
  created() {
    // 获取数据
    this.getData();
  },

  filters: {
    "to-uppercase": function(value) {
      return value.toUpperCase();
    },
    snippet: function(value) {
      return value.slice(0, 100) + "...";
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}
.el-input {
  margin-bottom: 20px;
}
article {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 30px 10px;
  margin-bottom: 40px;
}

article img {
  width: 200px;
  height: 200px;
  box-shadow: -5px 0 10px #eee inset;
}

section {
  width: 680px;
}
section .tags {
  display: flex;
}
article section .title {
  margin: 20px 0 10px;
}
article section .title .link {
  color: #555;
  font-size: 26px;
  line-height: 1.2;
}

.tags {
  margin: 10px 0 50px;
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

section .content {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
  line-height: 2;
}

.btn {
  display: inline-block;
  font-size: 14px;
  color: #fff;
  padding: 3px 10px;
  background: #2c3e50;
  line-height: 2;
  border-radius: 3px;
}
</style>

