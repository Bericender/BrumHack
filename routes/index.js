
/*
* GET home page.
*/
var request = require('request');
var braintree = require('braintree');
var fs = require('fs');
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dmy5xrg7yndrzqyh",
  publicKey: "39jg4jmwpgrp76qn",
  privateKey: "f0db0260c7fbb23d678e689e8f2a7558"
  });
exports.index = function(req, res){

  gateway.clientToken.generate({
    //customerId: aCustomerId
  }, function (err, response) {
    var clientToken = response.clientToken
  });

/*  app.post("/purchases", function (req, res) {
    var nonce = req.body.payment_method_nonce;
    // Use payment method nonce here
  });
*/

  var dataArray = fs.readFileSync(__dirname + '/../public/largedata.json', 'utf8');

  //console.log(dataArray);

  res.render('index', {
    dataArray: dataArray,
    title: "Chilling like a Villain"
  });
};



exports.checkout = function(req, res){
    gateway.transaction.sale({
    amount: '100.00',
    paymentMethodNonce: 'nonce-from-the-client',
  }, function (err, result) {
  });
};
