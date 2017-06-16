/*
  Route handle for all the routes
*/
var router = require('express').Router();

router.route('/')
      .get(function(req,res){
          res.send("awesome, its working")
      });

module.exports = router;