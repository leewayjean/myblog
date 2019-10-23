<template>
  <el-main class="animated fadeIn fast">
    <el-card class="box-card">
      <el-form ref="form" label-width="80px" labelPosition="top">
        <el-form-item label="博客标题">
          <el-input v-model="blog.title"></el-input>
        </el-form-item>
        <!-- 博客内容 -->
        <div ref="editor" style="text-align:left" ></div>
        <!-- 分类 -->

        <el-form-item label="博客分类">
          <Select @select-tags="selectTags" :tags="blog.categories" />
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="blog.author"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" :plain="true" @click="post">编辑博客</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-main>
</template>
<script>
import Select from "../../components/Select";
import E from "wangeditor";
export default {
  name: "edit-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {
        title: "",
        content: "",
        author: "",
        categories: []
      }
    };
  },
  components: {
    Select
  },
  methods: {
    fetchData() {
      this.axios.get("/api/blogs/singleblog/" + this.$route.query.id).then(res => {
        let singleBlog = res.data;
        this.blog.title = singleBlog.title;
        this.blog.content = singleBlog.content;
        this.blog.author = singleBlog.author;
        this.blog.categories = singleBlog.categories;
      })
    },
    post() {
      this.$confirm("确定要修改你的博客？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "danger"
      }).then(() => {
        this.axios.post("/api/editblog/" + this.$route.query.id, this.blog).then(res => {
          this.$message({
            message: "博客修改成功！",
            type: "success"
          });
          this.$router.push("/");
        });
      });
    },
    selectTags(val) {
      console.log("当前的分类" + val);
      console.log(val instanceof Array);
      this.blog.categories = val;
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.blog.content = html;
    };
    editor.create();
    this.axios.get("/api/blogs/singleblog/" + this.id).then(blogs => {
        let singleBlog = blogs.data;
         editor.txt.html(singleBlog.content)
      })
   
    


  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
