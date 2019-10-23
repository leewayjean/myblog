
//引入vue
import Vue from 'vue'
//引入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
import App from './App.vue'
import router from './router'
import store from './store'


//使用mintui
Vue.use(MintUI)
Vue.use(ElementUI);


Vue.use(require('vue-wechat-title'));


//将axios挂载到vue原型
Vue.prototype.axios = axios;

// 全局配置axios

//引入数据加载动画组件
import { Indicator } from 'mint-ui';



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Indicator.open();
  return config;
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  Indicator.close();
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
}); 



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
