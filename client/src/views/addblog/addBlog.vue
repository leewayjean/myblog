<template>
  <el-main>
    <el-card class="box-card">
      <el-page-header @back="goBack"></el-page-header>
      <el-form ref="form" label-width="80px" labelPosition="top" :rules="rules">
        <!--标题 -->
        <el-form-item label="博客标题" prop="title">
          <el-input v-model="blog.title"></el-input>
        </el-form-item>
        <!-- 内容输入 -->
<!--         <el-form-item label="博客内容" prop="content">
          <el-input type="textarea" v-model="blog.content" :rows="8"></el-input>
        </el-form-item> -->
        <!-- 编辑器 -->
        <div ref="editor" style="text-align:left"></div>
        <!-- 分类 -->

        <el-form-item label="博客分类">
          <Select @select-tags="selectTags" />
        </el-form-item>
        <h5>请上传封面</h5>
        <Upload />
        <!-- 作者 -->
        <el-form-item label="作者" prop="author">
          <el-input v-model="blog.author"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :plain="true" @click="post">添加博客</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-main>
</template>
<script>
import Upload from "../../components/Upload";
import Select from "../../components/Select";
import E from "wangeditor";
export default {
  name: "add-blog",
  components: {
    Upload,
    Select,
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入博客标题", trigger: "blur" },
          { min: 5, message: "至少需要5个字", trigger: "blur" }
        ],
        content: [
          { required: true, message: "请输入博客内容", trigger: "blur" },
          { min: 3, message: "至少需要3个字", trigger: "blur" }
        ],
        author: [
          { required: true, message: "请输入你的名字", trigger: "blur" },
          { min: 2, message: "至少需要2个字", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    post: function() {
      this.blog.date = Date();
      // 显示提示框
      this.$confirm("现在发布你的博客？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "primary"
      })
        //确定发布，发起请求
        .then(() => {
          this.axios.post("/api/addblog", this.blog).then(() => {
            //添加博客成功，提示消息并跳转到首页
            this.$message({
              message: "博客发布成功！",
              type: "success"
            });
            this.$router.push("/");
          });
        });
    },
    selectTags(val) {
      this.blog.categories = val;
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = html => {
      this.blog.content = html;
    };
    editor.create();
  }
};
</script>
<style scoped>
.el-page-header {
  padding: 10px 0 30px 0;
}

h5 {
  padding: 10px 0;
}
</style>
