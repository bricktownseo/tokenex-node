# TokenEX Node.js Library

## Documentation

See the [TokenEX API docs](https://docs.tokenex.com/).

## Installation

Install the package with:

    npm install tokenex --save

## Table of Contents

* [Initialization](#initialization)
* [Token Services](#token-services)
  * [Tokenize()](#tokenize)
  * [TokenizeEncrypted()](#tokenizeencrypted)
  * [Validate()](#validate)
  * [Detokenize()](#detokenize)
  * [Delete()](#delete)

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

    /*
    success {
      "Error":"",
      "ReferenceNumber":"15102913382030662954",
      "Success":true,
      "Token":"545454587415454"
    }
    */
  ```

### TokenizeEncrypted()

  TokenizeFromEncryptedValue is the method that you would call in order to tokenize a given encrypted value that was previously encrypted through Browser Based Encryption. You will need to provide your TokenEx ID and authorized API Key, the data you wish to tokenize and your desired token scheme.

  ```js
    //"EcryptedData":"dGhpcyBpcyBzb21lIHJlYWxseSBsb25nIGNpcGhlciB0ZXh0IGZyb20gb3VyIFJTQSBsaWJyYXJ5",
    //"TokenScheme":1

    tokenex.token.tokenizeEncrypted("dGhpcyBpcyBzb21lIHJlYWxseSBsb25nIGNpcGhlciB0ZXh0IGZyb20gb3VyIFJTQSBsaWJyYXJ5","1", function(err, success){
      if(err){
        console.log("Error", err.message, err.code);
      }
      console.log("sucess",success);
    });
    /*
    success {
      "Error":"",
      "ReferenceNumber":"15102913382030662954",
      "Success":true,
      "Token":"545454587415454"
    }
    */
  ```


### Validate()

  Validates if the given token exists within your token vault.

  ```js
    //"Token":"545454587415454"
    tokenex.token.validate("545454587415454","1", function(err, success){
      if(err){
        console.log("Error", err.message, err.code);
      }
      console.log("sucess",success);
    });

    /*
    success {
      "Error":"",
      "ReferenceNumber":"15102913382030662954",
      "Success":true,
      "Valid":true,
    }
    */
  ```
### Detokenize()
### Delete()
