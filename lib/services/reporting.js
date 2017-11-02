'use strict';

function reporting(service){
  return {
    _service:service,
    _path: "/ReportingServices.svc/REST/",
    getUsageStats: function(callback){
      this._service.process(this._path+"GetUsageStats",{}, callback);
    }
  }
}
module.exports = reporting;
