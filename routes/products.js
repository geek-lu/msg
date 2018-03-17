var express=require('express'),
    router=express.Router();

var products=require('../controllers/products.controller');

router.route("/getProductById/:lid")
  .get(products.getProductById);
router.param("lid",products.byId);

module.exports=router;