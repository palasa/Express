var mongoose = require('mongoose');

// 表结构
var userSchema = new mongoose.Schema({
    user:String,
    pwd:String
});

// 操作表结构的模型对象 
var userModel = mongoose.model( 'userModel' , userSchema );

module.exports = userModel;