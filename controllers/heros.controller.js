var Wei = require('mongoose').model("Wei")
var Shu = require('mongoose').model("Shu")
var Wu = require('mongoose').model("Wu")
var Zl = require('mongoose').model("Zl")
//提前执行，用于拦截参数，所以byId比普通的路由方法多接受一个参数值
exports.getheros=function(req,res,next){
    console.log("进入heros的控制器")
    var state=0,wei,shu,wu,zl;
    function resOver(){
        if(state == 100){
            res.json({wei,shu,wu,zl})
        }
    }
     Wei.find().then(data=>{
        state+=25
         wei=data
         resOver();
     })
    Shu.find().then(data=>{
        state+=25
        shu=data
        resOver()
    })
    Wu.find().then(data=>{
        state+=25
        wu=data
        resOver()
    })
    Zl.find().then(data=>{
        state+=25
        zl=data
        resOver()

    })

}