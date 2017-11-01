var tokenex = require('./lib/tokenex')("dwNJ1DnQAdT1DNyjbAYB","2844810397387491");

// console.log(tokenex.token.tokenize("4242424242424242","1"));
tokenex.token.delete("4242428753444242", function(err, success){
  if(err){
    console.log("WTF", err.message, err.code);
  }

  console.log("(incallback)Status",success);
});
