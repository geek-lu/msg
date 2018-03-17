var express = require('express');
var router = express.Router();
var user=require("../controllers/users.controller");
var passport=require('passport');

router.route("/signup")
  .post(user.signup)
router.route("/signin")
  .post(user.signin)//(req,res,next)
router.route("/isLogin")
  .get(user.isLogin)
router.route("/logout")
  .get(user.logout)
router.route("/oauth2/github")
  .get(passport.authenticate("github"))
router.route("/oauth2/github/callback")
  .get(passport.authenticate("github"),(req,res)=>{
    res.send("github登录成功");
    res.end();
  }
)
module.exports = router;
