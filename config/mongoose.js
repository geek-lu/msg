var config=require('./config');

var mongoose=require('mongoose'),
    Promise=require('promise');
mongoose.Promise=Promise;

var db=mongoose.connect(config.db);

require("../models/user.model");
require("../models/product.model");
require("../models/hero.model");
module.exports=db;