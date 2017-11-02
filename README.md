# TokenEX Node.js Library

## Documentation

See the [TokenEX API docs](http://docs.tokenex.com/#tokenex-api).

## Installation

Install the package with:

    npm install tokenex --save

## Table of Contents

* [Initialization](#initialization)
* [Token Services](#token-services)
  * [tokenize()](#tokenize)
  * [tokenizeEncrypted()](#tokenizeencrypted)
  * [validate()](#validate)
  * [detokenize()](#detokenize)
  * [delete()](#delete)
* [P2PE Services](#p2pe-services)
  * [tokenize()](#tokenize)
* [Payment Services](#payment-services)
  * [processTransaction()](#processtransaction)
  * [processTransactionAndTokenize()](#processtransactionandtokenize)
* [Fraud Services](#fraud-services)
  * [getKountHashValue()](#getkounthashvalue)
  * [getKountHashValueAndTokenize()](#getkounthashvalueandtokenize)
* [Reporting Services](#reporting-services)
  * [getUsageStats()](#getusagestats)

## Initialization

  ```js
  //  "APIKey":"YourAPIKey",
  //  "TokenExID":"YourtokenExID",

  var tokenex = require('./lib/tokenex')("YourAPIKey","YourtokenExID");
  ```

## Token Services

  This portion of the API is used to manage the entire token life cycle. You can do things that create and delete tokens as well as detokenize.

### tokenize()

  Tokenize is the method that you would call in order to tokenize a given data set. You will need to provide your TokenEx ID and authorized API Key, the data you wish to tokenize and your desired token scheme.

  TokenScheme (Enum): tokenex.schemes.sixTOKENfour [TokenScheme](http://docs.tokenex.com/#appendix-token-schemes)
  ```js
    //  "Data":"5454545454545454",
    //  "TokenScheme": tokenex.schemes.sixTOKENfour(1)

    tokenex.token.tokenize("5454545454545454", tokenex.schemes.sixTOKENfour, function(err, success){
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

### tokenizeEncrypted()

  TokenizeFromEncryptedValue is the method that you would call in order to tokenize a given encrypted value that was previously encrypted through Browser Based Encryption. You will need to provide your TokenEx ID and authorized API Key, the data you wish to tokenize and your desired token scheme.

  * EcryptedData (string): The encrypted value of the sensitive data you wish to tokenize.
  * TokenScheme (Enum): tokenex.schemes.sixTOKENfour [TokenScheme](http://docs.tokenex.com/#appendix-token-schemes)
  ```js
    //"EcryptedData":"dGhpcyBpcyBzb21lIHJlYWxseSBsb25nIGNpcGhlciB0ZXh0IGZyb20gb3VyIFJTQSBsaWJyYXJ5",
    //"TokenScheme":tokenex.schemes.sixTOKENfour (1)

    tokenex.token.tokenizeEncrypted("dGhpcyBpcyBzb21lIHJlYWxseSBsb25nIGNpcGhlciB0ZXh0IGZyb20gb3VyIFJTQSBsaWJyYXJ5", tokenex.schemes.sixTOKENfour, function(err, success){
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

### validate()

  Validates if the given token exists within your token vault.

  ```js
    //"Token":"545454587415454"

    tokenex.token.validate("545454587415454", function(err, success){
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

### detokenize()

  Allows you to retrieve the sensitive data associated with a given token.

  ```js
    //"Token":"545454587415454",

    tokenex.token.detokenize("545454587415454", function(err, success){
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
      "Value":"5454545454545454"
    }
    */
  ```

### delete()

  Deletes the sensitive data and token from your token vault.

  ```js
    //"Token":"545454587415454"

    tokenex.token.delete("545454587415454", function(err, success){
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
    }
    */
  ```

## P2PE Services

  P2PEServices allows customers to tokenize an encrypted value from a P2PE device. Our platform is device agnostic and supports both the PIN and Data block variants of DUKPT

  Prior to testing this functionality, TokenEx will need to create an encryption profile for your account, and for production use, the production key will need to be loaded on the TokenEx HSM. Please contact your project team for specific information related to your chosen P2PE device.

### tokenize()

  Tokenizes data from a P2PE device.

  * EncryptedTrack (string): The track value from the devices payload (location based on specific device)
  * EncryptionProfile (string): The encryption profile defined by TokenEx associated with keys loaded in the P2PE device. For test devices, this value will be ‘test’
  * KSN (string): The KSN value from the devices payload (location based on specific device)
  * RequestFormat (Enum): Format of the data (e.g. Hex(xml: Hex, json: 2), Base64(xml:Base64,json: 1))
  * TokenScheme (Enum): tokenex.schemes.GUID  [TokenScheme](http://docs.tokenex.com/#appendix-token-schemes)
  ```js
    //"EncryptedTrack":"0x15489",
    //"EncryptionProfile":"test",
    //"KSN":"0x54865",
    //"RequestFormat":2,
    //"TokenScheme":tokenex.schemes.GUID (4)


    tokenex.p2pe.tokenize('0x15489',"test",'0x54865',"2",tokenex.schemes.GUID ,function(err, success){
       if(err){
         console.log("WTF", err.message, err.code);
       }
       console.log("success",success);
    });

    /*
    success {
      "Error":"",
      "ReferenceNumber":"15102913382030662954",
      "Success":true,
      "Token":"545454587415454",
    }
    */

  ```
## Payment Services

  The Payment Services serve as an abstraction layer between you and various Payment Service Providers and allows you to facilitate payment processing without your application having to obtain the PAN.

### processTransaction()

  The ProcessTransaction method allows you to conduct a transaction with a supported payment gateway or processor using your token. This method will facilitate: Authorization, Capture, Purchase, Refund, and Void transactions. The specific input parameters to be included with this request will be dependent upon the payment gateway or processor you are using. If a field is not required for your gateway, it does not have to be populated. You can choose to use either REST or SOAP method calls.

  The complete list of currently supported gateways, and details of input parameters for each of those gateways can be found in [Gateway Parameters](http://docs.tokenex.com/#appendix-gateway-parameters).

  ```js
    /*
    "TransactionType": This the type of transaction you wish to conduct. This is where you will stipulate Authorize (1), Capture (2), Purchase (3), Refund (4), Void (5), Reverse (6).
    */

    tokenex.payment.processTransaction('1',function(err, success){
      if(err){
        console.log("Error here", err.message, err.code);
      }
      console.log("success",success);
    });

    /*
    success {
      "Error": "",
      "ReferenceNumber": "15102913382030662954",
      "Success": true,
      "AVS_Result": {
        "Code": "String content",
        "Message": "String content",
        "PostalMatch": "String content",
        "StreetMatch": "String content"
      },
      "Authorization": "123456;A",
      "CVV_Result": {
        "Code": "String content",
        "Message": "String content"
      },
      "Message": "Transaction Approved",
      "Params": [{
        "Key": "AuthorizationCode",
        "Value": "A"
      }, {
        "Key": "TransactionID",
        "Value": "123456"
      }],
      "Test": true,
      "TransactionResult": true
    }
    */
  ```

### processTransactionAndTokenize()

  The ProcessTransactionAndTokenize method allows you to conduct a transaction with a supported payment gateway or processor using a PAN or encrypted PAN. This process will also tokenize the PAN. This method will facilitate: Authorization, Capture, Purchase, Refund, and Void transactions. The specific input parameters to be included with this request will be dependent upon the payment gateway or processor you are using. If a field is not required for your gateway, it does not have to be populated. You can choose to use either REST or SOAP method calls.

  The complete list of currently supported gateways, and details of input parameters for each of those gateways can be found in [Gateway Parameters](http://docs.tokenex.com/#appendix-gateway-parameters).

  * TokenScheme (Enum): See [Token Schemes](http://docs.tokenex.com/#appendix-token-schemes)
  ```js
    /*
    "TransactionType": This the type of transaction you wish to conduct. This is where you will stipulate Authorize (1), Capture (2), Purchase (3), Refund (4), Void (5), Reverse (6).
    "Encrypted" (boolean): Indicator if the value supplied is encrypted. If true, value is encrypted.
    "TokenScheme" (Enum): 1
    */

    tokenex.payment.processTransactionAndTokenize('1', "true", tokenex.schemes.sixTOKENfour, function(err, success){
      if(err){
        console.log("Error", err.message, err.code);
      }
      console.log("success",success);
    });

    /*
    success{
      "Error": "",
      "ReferenceNumber": "15102913382030662954",
      "Success": true,
      "AVS_Result": {
        "Code": "String content",
        "Message": "String content",
        "PostalMatch": "String content",
        "StreetMatch": "String content"
      },
      "Authorization": "123456;A",
      "CVV_Result": {
        "Code": "String content",
        "Message": "String content"
      },
      "Message": "Transaction Approved",
      "Params": [{
        "Key": "AuthorizationCode",
        "Value": "A"
      }, {
        "Key": "TransactionID",
        "Value": "123456"
      }],
      "Test": true,
      "Token":"545454587415454",
      "TransactionResult": true
      }
    */
  ```

## Fraud Services

### getKountHashValue()

  Generate a Kount hash value that can be sent directly to Kount for fraud validation of a given PAN.

  ```js
    //"Token":"545454587415454"

    tokenex.fraud.getKountHashValue('545454587415454',function(err, success){
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
      "Hash":"150"
    }
    */
  ```

### getKountHashValueAndTokenize()

  Generate a Kount hash value that can be sent directly to Kount for fraud validation of a given PAN and return a TokenEx token.

  * Data (string): The data you wish to obtain a hash value for and tokenize.
  * Encrypted (boolean): Indicator if the value supplied is encrypted. If true, value is encrypted.
  * TokenScheme (Enum): See [Token Schemes](http://docs.tokenex.com/#appendix-token-schemes)

  ```js
    //"Data":"WhatYouWantToTokenize",
    //"Encrypted":true,
    //"TokenScheme":tokenex.schemes.sixTOKENfour (1)

    tokenex.fraud.getKountHashValueAndTokenize('WhatYouWantToTokenize', true, tokenex.schemes.sixTOKENfour, function(err, success){
      if(err){
        console.log("Error", err.message, err.code);
      }
      console.log("success",success);
    });

    /*
    success {"Error":"",
      "ReferenceNumber":"15102913382030662954",
      "Success":true,
      "Hash":"150"
      "Token":"545454587415454"
    }
    */
  ```

## Reporting Services

### getUsageStats()

  This allows for usage statistic reporting through a method call. You can return total tokens, as well as the number of calls for each method.

  ```js
  tokenex.reporting.getUsageStats(function(err, success){
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
    "TokenCount":2147483647,
    "UsageStats":[{
        "MethodName":"FirstMethodName",
        "ThirtyDayCount":2147483647,
        "TotalCount":2147483647
    }]
  }
  */
  ```
