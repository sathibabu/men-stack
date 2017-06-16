var router = require('express').Router();

var Utils = require('../utils/utils');
var csv = require('csv-parse');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

router.route('/')
      .post(upload.single('result'),function(req,res){
      		console.log(req.file);
            res.send("Thanks !!");
      });

module.exports = router;