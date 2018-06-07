'use strict';

function fraud(service){
  return {
    _service:service,
    _path: "/FraudServices.svc/REST/",
    getKountHashValue: function(token, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"GetKountHashValue",{Token:token,APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"GetKountHashValue",{Token:token}, callback);
      }
    },
    getKountHashValueAndTokenize: function(data, encrypted, scheme, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"GetKountHashValueAndTokenize",{Data:data, Encrypted: encrypted, TokenScheme: scheme,APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"GetKountHashValueAndTokenize",{Data:data, Encrypted: encrypted, TokenScheme: scheme}, callback);
      }
    }
  }
}
module.exports = fraud;
