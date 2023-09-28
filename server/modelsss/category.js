const mongoose = require('mongoose')



const categorySchema=new mongoose.Schema({
    title: String,
    description: String,
    status: {type:Boolean, default: true},
})

const Category =mongoose.model("Category",categorySchema)
module.exports=Category