<template>
  <div class="wrapper">
    <!-- header开始 -->
    <Header/>
    <!-- header结束 -->

    <!-- main开始 -->
    <main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </main>
    <!-- main结束 -->

    <!-- footer开始 -->
    <Footer />
    <!-- footer 结束 -->
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>


<style scoped>

/* main 开始 */
main {
  max-width: 900px;
  min-height: 600px;
  margin: 80px auto 30px;
}
</style>
