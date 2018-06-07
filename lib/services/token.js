'use strict';

function token(service){
  return {
    _service:service,
    _path: "/TokenServices.svc/REST/",
    delete: function(token, callback){
      this._service.process(this._path+"DeleteToken",{Token:token}).then(function(resp){
        if(resp.Success === false){
          callback(resp.error, false);
        }else{
          callback(null, true);
        }
      });
    },
    detokenize: function(token, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"Detokenize",{Token:token, APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"Detokenize",{Token:token}, callback);
      }
    },
    tokenize: function(data, scheme, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"Tokenize",{Data:data, TokenScheme:scheme, APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"Tokenize",{Data:data, TokenScheme:scheme}, callback);
      }
    },
    tokenizeEncrypted: function(encrypted, scheme, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"TokenizeFromEncryptedValue",{EcryptedData:encrypted, TokenScheme:scheme, APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"TokenizeFromEncryptedValue",{EcryptedData:encrypted, TokenScheme:scheme}, callback);
      }
    },
    validate: function(token, callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"ValidateToken",{Token:token, APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"ValidateToken",{Token:token}, callback);
      }
    }
  }
}
module.exports = token;
