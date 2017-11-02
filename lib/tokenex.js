'use strict';

TokenEX.DEFAULT_HOST = 'https://test-api.tokenex.com';
TokenEX.DEFAULT_PORT = '443';

function TokenEX(apiKey, tokenexID){
  if (!(this instanceof TokenEX)) {
    return new TokenEX(apiKey, tokenexID);
  }

  this.params = {
    key: apiKey,
    id: tokenexID,
    host: TokenEX.DEFAULT_HOST,
    port: TokenEX.DEFAULT_PORT
  }

  this.schemes = {
    fourTOKENfour: 1,

  }
  this.service = require('./service')(this.params);
  this.token = require('./services/token')(this.service);
  this.p2pe = require('./services/p2pe')(this.service);
  this.payment = require('./services/payment')(this.service);
  this.fraud = require('./services/fraud')(this.service);
  this.reporting = require('./services/reporting')(this.service);
}

TokenEX.prototype = {
  setAPIKey: function(key){
    this.params.key = key;
  },

  setTokenEXID: function(id){
    this.params.id = id;
  }
}

module.exports = TokenEX;

module.exports.TokenEX = TokenEX;
