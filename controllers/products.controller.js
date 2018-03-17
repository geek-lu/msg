var Product=require('mongoose').model("Product");

//在拦截并处理参数后，才执行，所以req中已经有了现成的product对象
exports.getProductById=function(req,res,next){
  res.json(req.product);
}
//提前执行，用于拦截参数，所以byId比普通的路由方法多接受一个参数值
exports.byId=function(req,res,next,lid){
  Product.findOne({lid})
    .then(p=>{
      req.product=p;
      next();
    })
}