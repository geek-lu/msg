var express = require('express');
//专门操作url/本地硬盘路径的工具模块
var path = require('path');
//专门为客户端返回网站logo图标的模块
var favicon = require('serve-favicon');
//记录http请求日志的模块
var logger = require('morgan');
//专门转换cookie内容的模块，将cookie内容转换到req.cookies对象中
var cookieParser = require('cookie-parser');
//专门转换请求体中的参数的模块，将请求体中的数据转换到req.body对象中
var bodyParser = require('body-parser');
//专门动态编译less为css
var lessMiddleware = require('less-middleware');

var session=require('express-session');
var flash=require('connect-flash');
var passport=require('passport');

require("./config/mongoose");
//创建mongodb的客户端代理对象db
//生成专门操作用户的User模块(包含: User对象的统一结构和增删改查方法)
require("./config/passport")();

var index = require('./routes/index');
var users = require('./routes/users');
var products=require('./routes/products');
var heros=require('./routes/heros')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  saveUninitialized:true,
  resave:false,
  secret:"64位或128位随机字符串"
}));
app.use(passport.initialize());
app.use(passport.session());



app.use('/', index);
app.use('/users', users);
app.use('/products', products);
app.use('/heros', heros);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
