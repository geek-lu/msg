var passport=require('passport'),
    User=require('mongoose').model('User');

module.exports=function(){
  passport.serializeUser((user,done)=>{
    console.log("进入passport.js 序列化user");
    done(null,user.id);
  });
  passport.deserializeUser((_id,done)=>{
    User.findOne({_id},"-upwd")
      .then(u=>{
        done(null,u);
      })
  });
  require("./strategies/local")();
  require("./strategies/github")();
}