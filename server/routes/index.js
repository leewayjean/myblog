const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const blogModel = require("../models/blogModel");


//连接数据库

mongoose.connect("mongodb://127.0.0.1:27017/blog-app", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("数据库连接成功");
  }
})



/* 
  methods GET
  params false
  desc   添加博客
  api   /addblog
*/
router.post("/addblog", (req, res) => {
  let newBlog = new blogModel({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    categories:req.body.categories,
    time: new Date().toLocaleString()
  })

  newBlog.save((err, data) => {
    res.send("博客添加成功")
  })

})

/* 
  methods GET
  params true
  desc   分页接口
  api   /blogList/:page
*/

router.get("/blogsList/:page",(req,res) => {
  let num = req.params.page;
  const i = 6;
  blogModel.find({}).skip((num-1)*i).limit(i).exec((err,data) => {
    res.send(data);
  })
})

/* 
  methods GET
  params true
  desc   删除博客
  api   /blogList/:page
*/
router.get("/delete/:id", (req, res) => {
  blogModel.find({}).remove({ _id: req.params.id }).exec((err, data) => {
    res.send("数据删除成功");
  })

})

/* 
  methods GET
  params true
  desc   编辑博客
  api   /editblog/:id
*/
router.post("/editblog/:id", (req, res) => {
  blogModel.findById(req.params.id).exec((err, data) => {
    if (err) {
      throw err;
    }
    data.title = req.body.title;
    data.content = req.body.content;
    data.author = req.body.author;
    data.categories = req.body.categories;
    data.save((err, data) => {
      res.send("博客编辑成功");

    })
  })
})


module.exports = router;
