var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "Merchant ID",
  publicKey: "Public Key",
  privateKey: "Private Key"
  });

gateway.transaction.sale({
  amount: '10.00',
  paymentMethodNonce: 'nonce-from-the-client',
}, function (err, result) {
});

exports.checkout = function(req, res){
  res.send("respond with a resource");
};
