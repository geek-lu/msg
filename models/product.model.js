var mongoose=require('mongoose'),
    Schema=mongoose.Schema;

var ProductSchema=new Schema({
  "lid" : Number,
  "family_id" : Number,
  "title" : String,
  "subtitle" : String,
  "price" : Number,
  "promise" : String,
  "spec" : String,
  "lname" : String,
  "os" : String,
  "memory" : String,
  "resolution" : String,
  "video_card" : String,
  "cpu" : String,
  "video_memory" : String,
  "category" : String,
  "disk" : String,
  "details" : String,
  "shelf_time" : Number,
  "sold_count" : Number,
  "is_onsale" : Boolean
},{collection:"xz_laptop"});
mongoose.model("Product",ProductSchema);