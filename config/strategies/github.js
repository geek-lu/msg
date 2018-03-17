var passport=require('passport'),
    GithubStrategy=require('passport-github').Strategy,
    config=require('../config.js'),
    users=require('../../controllers/users.controller');

module.exports=function(){
  passport.use(new GithubStrategy(
    {
      clientID:config.github.clientID,
      clientSecret:config.github.clientSecret,
      callbackURL:config.github.callbackURL
    },
    (accessToken, refreshToken, profile, done)=>{
      console.log("进入github策略中的回调函数");
      //console.log(profile);
      var providerData=profile._json;
      providerData.accessToken=accessToken;
      providerData.refreshToken=refreshToken;

      var providerUserProfile={
        uid:profile.id,
        uname:profile.username,
        email:profile.emails[0].value,
        provider:"github",
        providerId:profile.id,
        providerData:providerData
      }
      users.saveOAuth2UserProfile(providerUserProfile,done);
    }
  ))
}