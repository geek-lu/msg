var mongoose=require('mongoose'),
    Schema=mongoose.Schema;
const heroModel=require('./mymodel')
var WeiSchema=new Schema(heroModel,{collection:"wei"});
mongoose.model("Wei",WeiSchema);
var ShuSchema=new Schema(heroModel,{collection:"shu"});
mongoose.model("Shu",ShuSchema);
var WuSchema=new Schema(heroModel,{collection:"wu"});
mongoose.model("Wu",WuSchema);
var ZlSchema=new Schema(heroModel,{collection:"zl"});
mongoose.model("Zl",ZlSchema);
//mongodb是非关系型数据库，所以一切逻辑在代码中实现即可，当然考虑效率问题，不然
//很容易内存溢出