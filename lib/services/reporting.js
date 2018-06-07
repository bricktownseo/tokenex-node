'use strict';

function reporting(service){
  return {
    _service:service,
    _path: "/ReportingServices.svc/REST/",
    getUsageStats: function(callback, apikey = null){
      if(apikey != null){
        this._service.process(this._path+"GetUsageStats",{APIKey: apikey}, callback);
      }else{
        this._service.process(this._path+"GetUsageStats",{}, callback);
      }
    }
  }
}
module.exports = reporting;
