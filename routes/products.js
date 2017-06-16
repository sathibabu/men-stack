/*
  Route handle for all the routes
*/
var router = require('express').Router();
var mongoose = require('mongoose');
var Products = mongoose.model('Products');

router.route('/')
      .get(function(req,res){
        
        Products.find({},function(err,data){
            if(err){
            	res.send("Some issue, while extracting data");
            }
            res.send(data)          
         });
        
        
      })
      .post(function(req,res){
      	if(!req.body.item){
      		res.sendStatus(500);
      	}
     
        let product = new Products(req.body.item)
        
        product.save(function(err){
            if(err){
             	res.send("Some issue with the id's check your item");
            }
         });

         res.sendStatus(200);    

      });

router.route('/update')
      .post(function(req,res){
        
        let query = req.body.query;
        let update = req.body.update; 

      	console.log(query);
      	console.log(update);
      	if(!update || !update){
      		res.send("Malformed url data not able to find item_id or newitems");
      	}

      	Products.findOne(query,function(err,data){
             if(err){
             }else{
             
             } 
      	});
    
        res.sendStatus(200);

      })

router.route('/delete')
      .post(function(req,res){

      let query = req.body.query;
      Products.remove(query,function(err){
           if(err){
          // 	res.sendStatus(500);
           }else{
          // 	res.sendStatus(200);
           }
      });

      res.sendStatus(200)	
    })              

module.exports = router;