import request from './request.js'
import resources from './resources.js'

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
      const bodyData = arguments[0] || {};
      const httpMethod = ["post", "get", "put", "delete"].includes(func.method)
        ? func.method
        : (function() {
            throw new Error("Method not Allowed! - Resource declaration error");
          })();
      let routeName = func.route
      const qs = {};
      // Validate required arguments
      const argsInRouteName = routeName.match(/:[^}]+/g); // check for :
      if (argsInRouteName) {
        argsInRouteName.map(arg => {
          arg = arg.replace(/\W/g, "");
          if (!(arg in bodyData)) {
            throw new Error(`Argument '${arg}' is required`);
          } else {
            routeName = routeName.replace(`:${arg}`, bodyData[`${arg}`]);
          }
        });
      }
      // incase of endpoints with no params requirement
      if (func.params) {
        // check args
        if(func.params.required && func.params.required.length > 0) {
          func.params.required.map(param => {
            if (!(param in bodyData)) {
              throw new Error(`Parameter '${param}' is required`);
            }
          })
        }
      }

      // incase of endpoints with no args requirement
      if (func.args) {
        if(func.args.required.length > 0) {
          func.args.required.map(arg => {
            if (!(arg in bodyData)) {
              throw new Error(`Argument '${arg}' is required`);
            } else {
              qs[`${arg}`] = bodyData[`${arg}`];
            }
          })
        }
        if(func.args.optional.length > 0) {
          func.args.optional.map(arg => {
            if ((arg in bodyData)) {
              qs[`${arg}`] = bodyData[`${arg}`];
            }
            // we assume wrong send argument 
            // else {
            //   throw new Error(`Argument '${arg}' is not a params`);
            // }
          })
        }
      }

      try {
        const res = await request({ hostName, routeName, httpMethod, secretKey, bodyData })
        return res
      } catch(error) {
        return error
      }
    };
  }
}

