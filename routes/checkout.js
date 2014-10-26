var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dmy5xrg7yndrzqyh",
  publicKey: "39jg4jmwpgrp76qn",
  privateKey: "f0db0260c7fbb23d678e689e8f2a7558"
  });

gateway.transaction.sale({
  amount: '10.00',
  paymentMethodNonce: 'nonce-from-the-client',
}, function (err, result) {
});

exports.checkout = function(req, res){
  res.send("respond with a resource");
};
