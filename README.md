# TokenEX Node.js Library

## Documentation

See the [TokenEX API docs](https://docs.tokenex.com/).

## Installation

Install the package with:

    npm install tokenex --save

## Table of Contents

*[Initialization](#initialization)
*[Token Services](#token-services)
  *[Tokenize()](#tokenize)
  *[TokenizeEncrypted()](#tokenizeEncrypted)
  *[Validate()](#validate)
  *[Detokenize()](#detokenize)
  *[Delete()](#delete)

## Initialization

  ```js
  //  "APIKey":"YourAPIKey",
  //  "TokenExID":"YourtokenExID",
  //  "Data":"5454545454545454",
  //  "TokenScheme":1

  var tokenex = require('./lib/tokenex')("YourAPIKey","YourtokenExID");
  ```

## Token Services

  These API are used to manage token life cycle. You can do things that create, encrypt, validate, decrypt, and delete tokens.

### Tokenize()

  Tokenize is the method that you would call in order to tokenize a given data set. You will need to provide your TokenEx ID and authorized API Key, the data you wish to tokenize and your desired token scheme.

  ```js
  tokenex.token.tokenize("5454545454545454",1, function(err, success){
    if(err){
      console.log("Error", err.message, err.code);
    }
    console.log("success",success);
  });

  //
  ```

### TokenizeEncrypted()
### Validate()
### Detokenize()
### Delete()
