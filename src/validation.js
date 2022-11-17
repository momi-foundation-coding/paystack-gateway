/**
 * Major validations for codebase goes here
 * include validate http method, required and optional arguments
 */
export const validateAndSendHttpMethod = (httpMethod) => {
  if(["post", "get", "put", "delete"].includes(httpMethod)) {
    return httpMethod
  } else {
    throw new Error("Method not Allowed! - Resource declaration error");
  }
}

export const replacePathAndQueryParams = (
  { routeName, queryParamsData, pathParamsData, queryParams }
) => {
  const argsInRouteName = routeName.match(/:[^}]+/g); // check for (:) in path
  if (argsInRouteName) {
    argsInRouteName.map(arg => {
      arg = arg.replace(/\W/g, "");
      if (!(arg in pathParamsData)) {
        throw new Error(`Argument '${arg}' is required`);
      } else {
        routeName = routeName.replace(`:${arg}`, pathParamsData[`${arg}`]);
      }
    });
  }

  if (queryParams) {
    /**
     * right now, there are some assumptions made
     * when a user passes unexpected params, 
     *  - we assume instead of returning an error
     */
    if(queryParams.required.length > 0) {
      queryParams.required.map(arg => {
        if (!(arg in queryParamsData)) {
          throw new Error(`Argument '${arg}' is required`);
        } else {
          routeName = routeName.concat(`?${arg}=${queryParamsData[`${arg}`]}`)
        }
      })
    }
    if(queryParams.optional.length > 0) {
      queryParams.optional.map(arg => {
        if ((arg in queryParamsData)) {
          routeName = routeName.concat(`?${arg}=${queryParamsData[`${arg}`]}`)
        }
      })
    }
  }

  return routeName
}

export const validateRequiredBodyParameters = ({ bodyParams, data }) => {
  if (bodyParams) {
    // check args
    if(bodyParams.required && bodyParams.required.length > 0) {
      bodyParams.required.map(param => {
        if (!(param in data)) {
          throw new Error(`Parameter '${param}' is required`);
        }
      })
    }
  }
  return
}
