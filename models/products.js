var mongoose = require('mongoose');

	// "category":"Electornics",
	// "name":"Vu TV",
	// "price":"100",
	// "vendor":{
	// 	"id":"1,2,3",
	// 	"Name":"Sathibabu"
	// },
	// "description":"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
 //    "img":""


var products = ewn mongoose.Schema(
{
 category:String,
 item_id:String,
 name:String,
 price:Number,
 vendor:{id:String,name:String},
 description:String,
 img:String 
}
);

/**
Implement custome methods
*/




mongoose.model('products', products);
