'use strict';

function payment(service){
  return {
    _service:service,
    _path: "/PaymentServices.svc/REST/",
    processTransaction: function(type, transactionRequest, callback){
      this._service.process(this._path+"ProcessTransaction",{TransactionType:type, TransactionRequest:transactionRequest}).then(function(resp){
        callback(resp.error, resp.Success);
      });
    },
    processTransactionAndTokenize: function(type, encrypted, scheme, transactionRequest, callback){
      this._service.process(this._path+"ProcessTransactionAndTokenize",{TransactionType:type, Encrypted: encrypted, TokenScheme: scheme, TransactionRequest:transactionRequest}, callback);
    }
  }
}
module.exports = payment;
