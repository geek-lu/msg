var User=require('mongoose').model("User"),
  passport=require('passport');

//请求的body: firstName,lastName,email,username,
//提前被bodyParser中间件转化为:req.body={firstName,...}
exports.signup=function(req,res,next){
  var user=new User(req.body);
  user.save()
    .then(()=>{res.json({ok:1})})
    .catch(err=>{
      res.json({ok:0,msg:err.message})
    })
}
exports.signin=function(req,res,next){
  console.log("进入users.controller.signin");
  passport.authenticate(
    "local",//先调用本地验证的策略，获得用户对象
    function(err,user,info){
      console.log("回到users.controller.signin: ",err,user,info);
      if(err) 
        return next(err);
      if(!user) 
        return res.json({ok:0,msg:info.msg})
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({ok:1});
      });
    }
  )(req,res,next);
}
exports.isLogin=function(req,res,next){
  if(req.isAuthenticated())
    res.json({ok:1,user:req.user});
  else
    res.json({ok:0});
}
exports.logout=function(req,res,next){
  req.logout();
  res.end();
}
exports.saveOAuth2UserProfile=function(profile,done){
  User.findOne({
    provider:profile.provider,
    providerId:profile.providerId
  }).then(u=>{
    if(u){
      console.log("找到用户，直接执行下一步!");
      done(null,u); //下一步自动接reg.logIn
    }else{
      var possibleUsername=profile.uname;
      User.findUniqueUsername(
        possibleUsername,
        null,
        function(availUsername){
          console.log("返回findUniqueUsername的回调函数，准备创建用户并保存");
          profile.uname=availUsername;
          u=new User(profile);
          u.save().then(()=>{
            console.log("新用户保存成功!");
            done(null,u);//下一步自动接reg.logIn
          })
        }
      )
    }
  })
}