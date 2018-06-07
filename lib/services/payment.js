'use strict';

function payment(service){
  return {
    _service:service,
    _path: "/PaymentServices.svc/REST/",
    processTransaction: function(type, transactionRequest, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"ProcessTransaction",{TransactionType:type, TransactionRequest:transactionRequest,APIKey: apikey}).then(function(resp){
          callback(resp.error, resp.Success);
        });
      }else{
        this._service.process(this._path+"ProcessTransaction",{TransactionType:type, TransactionRequest:transactionRequest}).then(function(resp){
          callback(resp.error, resp.Success);
        });
      }
    },
    processTransactionAndTokenize: function(type, encrypted, scheme, transactionRequest, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"ProcessTransactionAndTokenize",{TransactionType:type, Encrypted: encrypted, TokenScheme: scheme, TransactionRequest:transactionRequest, APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"ProcessTransactionAndTokenize",{TransactionType:type, Encrypted: encrypted, TokenScheme: scheme, TransactionRequest:transactionRequest}, callback);
      }
    }
  }
}
module.exports = payment;
