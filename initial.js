var tokenex = require('./lib/tokenex')("dwNJ1DnQAdT1DNyjbAYB","2844810397387491");

// console.log(tokenex.token.tokenize("4242424242424242","1"));
// tokenex.token.delete("4242428753444242", function(err, success){
//   if(err){
//     console.log("WTF", err.message, err.code);
//   }
//
//   console.log("(incallback)Status",success);
// });

// p2pe srvice
// tokenex.p2pe.tokenize('0x15489',"test",'0x54865',"2","4",function(err,success){
//   if(err){
//     console.log("WTF", err.message, err.code);
//   }
//
//   console.log("(incallback)Status",success);
// });

tokenex.payment.processTransaction('Capture',function(err,success){
  console.log("processTransaction");
  if(err){
    console.log("Error here", err.message, err.code);
  }
  console.log("(incallback)Status",success);
});

tokenex.payment.processTransactionAndTokenize('Capture',"true",'4',function(err,success){
  console.log("processTransactionAndTokenize");
  if(err){
    console.log("Error", err.message, err.code);
  }
  console.log("(incallback)Status",success);
});
