'use strict';

function p2pe(service){
  return {
    _service:service,
    _path: "/P2PEService.svc/REST/",
    tokenize: function(track, profile,ksn,format,scheme, callback){
      this._service.process(this._path+"Tokenize",{EncryptedTrack : track, EncryptionProfile : profile, KSN: ksn, RequestFormat : format, TokenScheme:scheme}, callback);
    }
  }
}

module.exports = p2pe;
