var express = require('express');
const userModel = require('../db/models/UserModel');
var router = express.Router();
var UserModel = require('../db/models/UserModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/auth' , (req,res)=>{
  res.send('鉴权中');
});

router.post('/', function (req, res) {
  res.send('Got a POST request')
});

router.post('/reg',  (req,res)=>{
  console.log(req.body);
  let {user,pwd} = req.body;
  
  // save to db
  new UserModel({
    user: user,
    pwd:pwd
  }).save().then(()=>{
    res.send({
      code:1 ,
      msg:'注册成功'
    });
  });

});



module.exports = router;
