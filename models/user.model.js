var mongoose=require('mongoose'),
    Schema=mongoose.Schema;

var UserSchema=new Schema({
  uid:Number,
  email:{
    type:String,
    unique:true,
    match:[
      /^.+\@.+\..+$/i,
      "邮箱格式不正确"
    ],
    trim:true,
    require:"邮箱不能为空!"
  },
  uname:{
    type:String,
    unique:true,
    trim:true,
    require:"用户名不能为空"
  },
  upwd:{
    type:String,
    validate:[
      password=> password&&password.length>=6,
      "密码长度必须6位以上"
    ]
  },
  provider:String,//记录用户使用何种OAuth平台登录
  providerId:String,//第三方网站提供的用户id
  providerData:{},//保存从第三方获得的用户信息
},{collection:"xz_user"});
UserSchema.statics.findUniqueUsername=
function(username,suffix,callback){
  console.log("调用UserSchema的静态方法findUniqueUsername，返回不重复的用户名");
  var _this=this;
  var possibleUsername=username+(suffix||'');
  _this.findOne({
    uname:possibleUsername
  }).then(u=>{
    if(!u) callback(possibleUsername);
    else 
      _this.findUniqueUsername(
        username,(suffix||0)+1, callback);
  })
}
mongoose.model("User",UserSchema);
//将来可用mongoose.model("User")取出使用: 增删改查