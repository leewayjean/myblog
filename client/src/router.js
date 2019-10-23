import Vue from 'vue'
import Router from 'vue-router'



const Home = () => import("./views/home/home.vue")
const addBlog = () => import("./views/addblog/addBlog.vue")
const Categories = () => import("./views/categories/categories.vue")
const BlogList = () => import("./views/blogList/blogList.vue")
const ShowBlog = () => import("./views/showblog/showBlog.vue")
const EditBlog = () => import("./views/editblog/editBlog.vue")
const About = () => import("./views/about/about.vue")

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    //匹配错误路由
    {
      path:"*",
      redirect:"/"
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/add",
      name: "add",
      component: addBlog,
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories,
    },
    {
      path: "/blogList",
      name: "blogList",
      component: BlogList,
    },
    {
      path: "/showblog",
      name: "showblog",
      component: ShowBlog,
    },
    {
      path: "/editblog",
      name: "editblog",
      component: EditBlog,

    },
    {
      path: "/about",
      name: "about",
      component: About

    }

  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
