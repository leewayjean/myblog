<template>
  <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择文章标签"
  >
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    tags: Array,
  },
  data() {
    return {
      options: [
        {
          value: "HTML",
          label: "HTML"
        },
        {
          value: "CSS",
          label: "CSS"
        },
        {
          value: "JavaScript",
          label: "JavaScript"
        }
      ],
      value: []
    };
  },
  created(){
      this.value = this.tags;
  },
  updated() {
    this.$emit("select-tags", this.value);
  }
};
</script>