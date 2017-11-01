'use strict';
var rp = require('request-promise');

module.exports = function service(params){
  return {
  _params: params,
  process: function(path, data, callback){
    var options = {
        method: 'POST',
        uri: this._params.host+path,
        body: {
          "APIKey":this._params.key,
          "TokenExID":this._params.id,
        },
        json: true // Automatically stringifies the body to JSON
    };

    Object.keys(data).map(function(key){
      options.body[key] = data[key];
    });
    // console.log(options);
    return rp(options).then(function(response){
      if(response.Error){
        response.error = {
          code: response.Error.substr(0,response.Error.indexOf(":")).trim(),
          message: response.Error.substr(response.Error.indexOf(":")+1).trim()
        };
      }
      return response;
    }).then(function (body) {
      // console.log(body);
      if(callback != null){
        if(body.Success === false){
          callback(body.error, false);
        }else{
          callback(null, body);
        }
      }
      return body;
    })
    .catch(function (err) {
      // console.log("err",err);
      if(callback != null){
        callback(err, null);
      }
      return err;
    });
  }
}
};
