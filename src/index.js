import request from './request.js'
import resources from './resources.js'
import {
  validateAndSendHttpMethod,
  replacePathAndQueryParams,
  validateRequiredBodyParameters
} from './validation.js'

export default function Paystack(key) {
  if(!(this instanceof  Paystack)) {
    return new Paystack(key)
  }

  this.endPoint = 'api.paystack.co'
  this.key = key
  this.initiate()
}


Paystack.prototype = {
  initiate: function() {
    for(const resource in resources) {
      const newMethod = function() {};
      for (var method in resources[resource]) {
        newMethod.prototype[method] = this.extend(resources[resource][method]);
      }
      Paystack.prototype[resource] = new newMethod();
    }
  },
  extend: function(func) {
    const hostName = this.endPoint
    const secretKey = this.key
    return async function() {
      const data = arguments[0] || {};
      const httpMethod = validateAndSendHttpMethod(func.method)
      if(func.bodyParams) {
        validateRequiredBodyParameters({ bodyParams: func.bodyParams, data: data.bodyParams })
      }
      const routeName = replacePathAndQueryParams({
        routeName: func.route,
        queryParamsData: data.queryParams,
        pathParamsData: data.pathParams,
        queryParams: func.queryParams
      })

      try {
        const res = await request({
          hostName, routeName, httpMethod, secretKey, bodyParamsData: data.bodyParams
        })
        return res
      } catch(error) {
        return error
      }
    };
  }
}
