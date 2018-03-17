var express=require('express'),
    router=express.Router();

var heros=require('../controllers/heros.controller');

router.route("/")
    .get(heros.getheros);
// router.param(products.byId);

module.exports=router;