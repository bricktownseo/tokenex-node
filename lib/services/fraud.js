'use strict';

function fraud(service){
  return {
    _service:service,
    _path: "/FraudServices.svc/REST/",
    getKountHashValue: function(token, callback){
      this._service.process(this._path+"GetKountHashValue",{Token:token}, callback);
    },
    getKountHashValueAndTokenize: function(data, encrypted, scheme, callback){
      this._service.process(this._path+"GetKountHashValueAndTokenize",{Data:data, Encrypted: encrypted, TokenScheme: scheme}, callback);
    }
  }
}
module.exports = fraud;
