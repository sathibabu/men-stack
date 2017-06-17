var router = require('express').Router();

var Utils = require('../utils/utils');

var multer  = require('multer');
var mongoose = require('mongoose');
var Products = mongoose.model('Products');

const csv=require('csvtojson')
var storage = multer.memoryStorage()
var upload_multer = multer({storage:storage}).any()

router.route('/')
      .post(function(req,res){
      		 upload_multer(req, res, function (err) {
				
				if (err) {
				}

			  	let data = req.files[0].buffer.toString();
			  	let rows = [];
			  	csv({noheader:true})
						.fromString(data)
						.on('csv',(csvRow)=>{ // this func will be called 3 times
							rows.push(csvRow) // => [1,2,3] , [4,5,6]  , [7,8,9]
						})
						.on('done',()=>{
							let jsonRows = Utils(rows);
                             Products.create(jsonRows,function(err){

                             });  
							
						})
    		  
			  });
            res.sendStatus(200);
      });

module.exports = router;