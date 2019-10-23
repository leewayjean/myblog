<template>
  <header>
    <!-- 导航 -->
    <nav>
      <h3 class="title">
        <a href="http://localhost:8888">lee's blog</a>
      </h3>
      <ul class="nav">
        <router-link to="/" tag="li" class="nav-item">
          <i class="fa fa-home"></i>
          首页
        </router-link>
        <router-link to="/categories" tag="li" class="nav-item">
          <i class="fa fa-th"></i>
          分类
        </router-link>
        <router-link to="/blogList" tag="li" class="nav-item">
          <i class="fa fa-archive"></i>
          列表
        </router-link>
        <router-link to="/add" tag="li" class="nav-item">
          <i class="fa fa-tags"></i>
          写博客
        </router-link>
        <li class="nav-item">
          <a href="https://www.github.com/leewayjean" target="_blank" class="fa fa-github"></a>
        </li>
        <router-link to="/about" tag="li" class="nav-item">
          <i class="fa fa-user"></i>
          关于
        </router-link>
      </ul>
    </nav>
    <!-- 导航结束 -->
  </header>
</template>
<style scoped>
/* header 开始*/
header {
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #24292e;
}
nav {
  width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
}
header nav a {
  text-decoration: none;
  color: #fff;
}
ul.nav {
  display: flex;
  margin-top: 8px;
}
header nav .title {
  font-size: 22px;
  color: #fff;
  font-weight: bold;
}
header nav .nav-item {
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;
}
header nav .nav-item:hover {
  background: #fff;
  color: #2c3e50;
}
header nav .nav-item:hover a {
  color: #2c3e50;
}
header nav .nav-item i {
  margin-right: 5px;
}
/* header 结束 */
</style>