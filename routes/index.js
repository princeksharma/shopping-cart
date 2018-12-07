var express = require('express');
var router = express.Router();
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
    var products = Product.find();
    res.render('shop/index', { title: 'Shopping Cart', products: products});
  });

module.exports = router;


// {
//   var productChunks = [];
//   var chunkSize = 3;
//   for(var i=0; i<docs.length; i+=chunkSize) {
//     productChunks.push(docs.slice(i, i+chunkSize));
//   }
