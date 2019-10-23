const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bolgSchema = new Schema({
    title: String,
    content: String,
    categories:Array,
    author: String,
    likes:Number,
    time: Date
  })
  
  let blogModel = mongoose.model("blogs", bolgSchema, "blogs");


  module.exports = blogModel;