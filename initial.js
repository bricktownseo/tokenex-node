var tokenex = require('./lib/tokenex')("dwNJ1DnQAdT1DNyjbAYB","2844810397387491");


// tokenex.token.tokenize("4242424242424242","1", function(err, success){
//   if(err){
//     console.log("WTF", err.message, err.code);
//   }
//
//   console.log("(incallback)Status",success);
// });
// tokenex.token.delete("4242428753444242", function(err, success){
//   if(err){
//     console.log("WTF", err.message, err.code);
//   }
//
//   console.log("(incallback)Status",success);
// });

// tokenex.payment.processTransaction('Capture',function(err,success){
//   console.log("processTransaction");
//   if(err){
//     console.log("Error here", err.message, err.code);
//   }
//   console.log("(incallback)Status",success);
// });
//
// tokenex.payment.processTransactionAndTokenize('Capture',"true",'4',function(err,success){
//   console.log("processTransactionAndTokenize");
//   if(err){
//     console.log("Error", err.message, err.code);
//   }
//   console.log("(incallback)Status",success);
// });
//
// var TransactionRequest = {
//     // "gateway": {
//     //   "name": "StripeGateway",
//     //   "login": "sk_test_QPcTLNz3zG5PzRkrWMFvxxHb"
//     // },
//     // "credit_card": {
//     //   "first_name": "Bob",
//     //   "last_name": "Smith",
//     //   "number": "4242424242424242",
//     //   "month": "4",
//     //   "year": "2019",
//     //   "verification_value": "111"
//     // },
//     // "transaction": {
//     //   "amount": 1000,
//     // }
//     "gateway": {
//       "name": "StripeGateway",
//       "login": "XXXXXXXXXX"
//     },
//     "credit_card": {
//       "first_name": "Bob",
//       "last_name": "Smith",
//       "number": "4111114356431111",
//       "month": "4",
//       "year": "2016",
//       "verification_value": "111"
//     },
//     "transaction": {
//       "amount": 1000,
//       "order_id": "12345",
//       "billing_address": {
//         "address1": "123 Maple Street",
//         "city": "Tulsa",
//         "state": "OK",
//         "zip": "74119"
//       }
//     }
//   };
// //
// tokenex.payment.processTransaction(2,TransactionRequest,function(err,success){
//   console.log("processTransaction");
//   if(err){
//     console.log("Error here", err.message, err.code);
//   }
//   console.log("(incallback)Status",success);
// });
//
//
//
// tokenex.payment.processTransactionAndTokenize('1',"true",'4', TransactionRequest,function(err,success){
//   console.log("processTransactionAndTokenize");
//   if(err){
//     console.log("Error", err.message, err.code);
//   }
//   console.log("(incallback)Status",success);
// });

// tokenex.fraud.getKountHashValue('4242425451784242',function(err,success){
//   console.log("processTransaction");
//   if(err){
//     console.log("Error here", err.message, err.code);
//   }
//   console.log("(incallback)Status",success);
// });

// tokenex.fraud.getKountHashValueAndTokenize('4242425451784242',true,1,function(err,success){
//   console.log("processTransaction");
//   if(err){
//     console.log("Error here", err.message, err.code);
//   }
//   console.log("(incallback)Status",success);
// });

tokenex.reporting.getUsageStats(function(err,success){
  console.log("processTransaction");
  if(err){
    console.log("Error here", err.message, err.code);
  }
  console.log("(incallback)Status",success);
});
