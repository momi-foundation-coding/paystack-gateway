const route = "/subscriptions"

const subscriptions = {
  createSubscription: {
    method: "post",
    route: route,
    bodyParams: {
      required: ["customer", "plan", "authorization"],
      optional: ["start_date"]
      
    }
  },
  listSubscriptions:{
    method:"get",
    route:route,
    queryParams:{
      required:["perPage","page"],
      optional:["customer","plan"]
    }
  }
  ,
  fetchSubscription:{
    method:"get",
    route:route + "/:id_or_code",
    pathParams:{
      required:["id_or_code"],
      optional:[]
    }
  },
  enableSubscription:{
    method:"post",
    route:route + "/enable",
    bodyParams:{
      required:["code","token"],
      optional:[]
    }
  },
  disableSubscription:{
    method:"post",
    route:route + "/disable",
    bodyParams:{
      required:["code","token"],
      optional:[]
    }
  },
  generateUpdateSubscriptionLink:{
    method:"get",
    route:route + "/:code/manage/link/",
    pathParams:{
      required:["code"],
      optional:[]
    }
  },
  sendUpdateSubscriptionLink:{
    method:"post",
    route:route + "/:code/manage/email/",
    pathParams:{
      required:["code"],
      optional:[]
    }
  }

}

export default subscriptions;
