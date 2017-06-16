var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json())
/** 
supporting CROS
*/
app.use(cors());

/**
 Connect ot data bases
*/
mongoose.connect("mongodb://localhost:27017");
mongoose.set('debug', true);


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

var products = require('./routes/products');
var upload = require('./routes/upload')

app.use('/products',products);
app.use('/upload',upload);

app.listen('3000',function(){
	console.log('listening on port 3000');
});