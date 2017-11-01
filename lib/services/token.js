'use strict';

function token(service){
  return {
    _service:service,
    _path: "/TokenServices.svc/REST/",
    delete: function(token, callback){
      this._service.process(this._path+"DeleteToken",{Token:token}).then(function(resp){
        callback(resp.error, resp.Success);
      });
    },
    detokenize: function(token, callback){
      this._service.process(this._path+"Detokenize",{Token:token}, callback);
    },
    tokenize: function(data, scheme, callback){
      this._service.process(this._path+"Tokenize",{Data:data, TokenScheme:scheme}, callback);
    },
    tokenizeEncrypted: function(encrypted, scheme, callback){
      this._service.process(this._path+"TokenizeFromEncryptedValue",{EcryptedData:encrypted, TokenScheme:scheme}, callback);
    },
    validate: function(token, callback){
      this._service.process(this._path+"ValidateToken",{Token:token}, callback);
    }
  }
}

module.exports = token;
