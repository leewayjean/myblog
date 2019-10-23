<template>
  <section>
    <div class="wrap">
      <h3 class="title">关于博主</h3>
      <div class="avatar">
      </div>
    </div>
    <h3 class="title">leewayjean</h3>
    <p class="content">鲁迅曾说：学习使人进步。</p>
    <h3 class="title">联系方式</h3>
    <p class="content">qq:1083488756@qq.com</p>
    <p class="content">电话:13250678058</p>

    <p class="content"></p>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section .title {
  margin: 20px 0 10px;
  color: #555;
  font-size: 26px;
  line-height: 1.2;
}
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 200px;
  height: 200px;
  background-image: url("../../assets/avatar.jpg");
  background-size:cover;
  background-repeat: no-repeat;      
  background-position: -50px; 
  box-shadow: -5px -5px 10px #eee inset;    
  margin: 20px 0;
  border-radius: 50%;
}


section .content {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
  line-height: 2;
}
</style>
