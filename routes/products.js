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
      	let data = req.body.item;
      	if(!data){
      		res.sendStatus(500);
      	}
        
      
      if(typeof(data)==="string")
          data = JSON.parse(data);
    
      let product = new Products(data);
        
        product.save(function(err){
            if(err){
             //	res.send("Some issue with the id's check your item");
            }
         });

         res.sendStatus(200);    

      });


router.route('/update')
      .post(function(req,res){
        let query = req.body.query;
        let update = req.body.update; 
 	
        Products.findOne(query,function(err,doc){
            if(err){
              res.send("Record Not found");
            }
             update = JSON.parse(update);
             doc["category"] = update["category"] || doc["category"];
             doc["item_id"] = update["item_id"] || doc["item_id"];
             doc["name"] = update["name"] || doc["name"];
             doc["price"] =  update["price"] || doc["price"];
             doc["description"] = update["description"] || doc["description"];
             doc["img"] = update["img"] || doc["img"];
            
          

            doc.save(function(err,doc){
              if(err){
                res.send('Not alble to save the updated record, kindly check the db connection')
              }

              res.send(doc);

            })

        });

      })

router.route('/delete')
      .post(function(req,res){

      let query = req.body.query;
      console.log(typeof(query));
      Products.findOneAndRemove(query,function(err){
           if(err){
           	res.sendStatus(500);
           }else{
           	res.sendStatus(200);
           }
      });

    })              

module.exports = router;