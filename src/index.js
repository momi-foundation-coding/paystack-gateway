import dotenv from 'dotenv'
import transactions from './endpoints/transactions.js'
import request from './request.js'

dotenv.config()

const resources = {
  transactions: transactions,
}

function Paystack(key) {
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
    return async function() {
      const data = arguments[0] || {};
      const method = ["post", "get", "put", "delete"].includes(func.method)
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
          if (!(arg in data)) {
            throw new Error(`Argument '${arg}' is required`);
          } else {
            routeName = routeName.replace(`:${arg}`, data[`${arg}`]);
          }
        });
      }
      // incase of endpoints with no params requirement
      if (func.params) {
        // check args
        if(func.params.required && func.params.required.length > 0) {
          func.params.required.map(param => {
            if (!(param in data)) {
              throw new Error(`Parameter '${param}' is required`);
            }
          })
        }
      }

      // incase of endpoints with no args requirement
      if (func.args) {
        if(func.args.required.length > 0) {
          func.args.required.map(arg => {
            if (!(arg in data)) {
              throw new Error(`Argument '${arg}' is required`);
            } else {
              qs[`${arg}`] = data[`${arg}`];
            }
          })
        }
        if(func.args.optional.length > 0) {
          func.args.optional.map(arg => {
            if ((arg in data)) {
              qs[`${arg}`] = data[`${arg}`];
            }
            // we assume wrong send argument 
            // else {
            //   throw new Error(`Argument '${arg}' is not a params`);
            // }
          })
        }
      }

      // Create request
      const options = {
        hostname: hostName,
        port: 443,
        path: routeName,
        method: method.toUpperCase(),
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }

      if (method == "post" || method == "put") {
        options.body = JSON.stringify(data);
      }

      try {
        const res = await request(options)
        return res
      } catch(error) {
        return error
      }
    };
  }
}

export default Paystack
