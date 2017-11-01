'use strict';

function token(service){
  return {
    _service:service,
    _path: "/TokenServices.svc/REST/",
    processTransaction: function(type, callback){
      this._service.process(this._path+"DeleteToken",{TransactionTyoe:type}).then(function(resp){
        callback(resp.error, resp.Success);
      });
    },
    processTransactionAndTokenize: function(type, encrypted, scheme, callback){
      this._service.process(this._path+"Detokenize",{TransactionType:type, Encrypted: encrypted, TokenScheme: scheme}, callback);
    }
  }
}
module.exports = token;
