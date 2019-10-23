const express = require('express');
const router = express.Router();
const blogModel = require("../../models/blogModel");



/* des      获取所有博客数据
   methods   GET
   api       /blogs/


*/
router.get("/", (req, res) => {
    blogModel.find({}, (err, data) => {
      if(err){
        throw err;
      }
      res.send(data)
    })
  
  })
  
  
  /* 
    des  获取单条博客数据
    methods GET
    api  /blogs/singleblog/:id
  
  
  */
  router.get("/singleblog/:id",(req,res) => {
    blogModel.findById(req.params.id).exec((err,data) => {
      if(err){
        throw err;
      }
      res.send(data);
    })
  })

    /* 
    des  点赞
    methods GET
    api  /blogs/singleblog/:id
  
  
  */
 router.post("/like/:id",(req,res) => {
  blogModel.findById(req.params.id).exec((err,data) => {
    if(err){
      throw err;
    }
   
  })
})


  module.exports = router;