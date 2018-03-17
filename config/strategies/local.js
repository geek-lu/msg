var passport=require('passport'),
    LocalStrategy=require('passport-local').Strategy,
    User=require('mongoose').model('User');

module.exports=function(){
  passport.use(new LocalStrategy(
    {
      usernameField:"uname",
      passwordField:"upwd"
    },
    (uname,upwd,done)=>{
      console.log("进入local.js");
      User.findOne({uname,upwd},"-upwd")
        .then(u=>{
          console.log("local.js中验证完成");
          if(!u)
            return done(null,false,{
              msg:"用户名或密码不正确!"
            });
          else
            return done(null,u);
        })
    }
  ))
}