const route = "/customer";

const customers = {
  createCustomer:{
    method:"post",
    route:route,
    bodyParams:{
      required:["email", "first_name","last_name"],
      optional:["phone", "metadata"]
    }
  },
  listCustomers:{
    method:"get",
    route:route,
    queryParams:{
      required:["perPage", "page"],
      optional:["from", "to"]
    }
  },
  fetchCustomer:{
    method:"get",
    route:route + "/:email_or_code",
    pathParams:{
      required:["email_or_code"],
      optional:[]
    }
  },
  updateCustomer:{
    method:"put",
    route:route + "/:code",
    queryParams:{
      required:["code"],
      optional:[]
    },
    bodyParams:{
      required:["first_name", "last_name"],
      optional:["phone", "metadata"]
    }
  },
  validateCustomer:{
    method:"post",
    route: route + "/:code/identification",
    bodyParams:{
      required:["first_name", "last_name", "type", "value", "country", "bvn",  "bank_code", "account_number"],
      optional:["middle_name"]
    }
  },
  whitelistCustomer:{
    method:"post",
    route:route + "/set_risk_action",
    bodyParams:{
      required:["customer"],
      optional:["risk_action"]
    }
  },
  blacklistCustomer:{
    method:"post",
    route:route + "/set_risk_action",
    bodyParams:{
      required:["customer"],
      optional:["risk_action"]
    }
  },
  deactivateAuthorization:{
    method:"post",
    route:route + "/deactivate_authorization",
    bodyParams:{
      required:["authorization_code"],
      optional:[]
    }
  }
}

export default customers 
