<template>
  <section class="categories">
    <h3 class="title">博客分类</h3>
    <h4 class="second_title">目前共计8个分类</h4>
    <ul class="categories_list">
      <li class="list_item">
        <a href>HTML</a>
        <span>(2)</span>
      </li>
      <li class="list_item">
        <a href>CSS</a>
        <span>(2)</span>
      </li>
      <li class="list_item">
        <a href>WebPack</a>
        <span>(2)</span>
      </li>
      <li class="list_item">
        <a href>Vue.js</a>
        <span>(2)</span>
      </li>
      <li class="list_item">
        <a href>Node.js</a>
        <span>(2)</span>
      </li>
      <li class="list_item">
        <a href>MongoDB</a>
        <span>(2)</span>
      </li>
      <li class="list_item">
        <a href>ES6</a>
        <span>(2)</span>
      </li>
    </ul>
  </section>
</template>



<style scoped>

.title,
.second_title {
  color: #555;
  text-align: center;
}
.title {
  margin: 20px 10px;
  font-weight: 400;
  font-size: 26px;
  line-height: 1.5;
}
.second_title {
  font-size: 16px;
}
/* 标题结束 */


/* categories_list 开始 */
.categories_list .list_item {
    margin:10px 5px;

}

.categories_list .list_item a,span{
    line-height: 2;
    font-size: 16px;
}
.categories_list .list_item a {
    text-decoration: none;
    color:#555;
    border-bottom: 1px solid #999;
}
.categories_list .list_item span {
    padding-left: 3px;
    color:#bbb;
}
</style>