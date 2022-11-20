const route = "/subscriptions"

const subscriptions = {
  createSubscription: {
    method: "post",
    route: route,
    BodyParam: {
      required: ["customer", "plan", "authorization"],
      optional: ["start_date"]
    }
  },
  listSubscriptions:{
    method:"get",
    route:route,
    QueryParam:{
      required:["perPage","page"],
      optional:["customer","plan"]
    }
  }
  ,
  fetchSubscription:{
    method:"get",
    route:route + "/:id_or_code",
    PathParam:{
      required:["id_or_code"],
      optional:[]
    }
  },
  enableSubscription:{
    method:"post",
    route:route + "/enable",
    BodyParam:{
      required:["code","token"],
      optional:[]
    }
  },
  disableSubscription:{
    method:"post",
    route:route + "/disable",
    BodyParam:{
      required:["code","token"],
      optional:[]
    }
  },
  generateUpdateSubscriptionLink:{
    method:"get",
    route:route + "/:code/manage/link/",
    PathParam:{
      required:["code"],
      optional:[]
    }
  },
  sendUpdateSubscriptionLink:{
    method:"post",
    route:route + "/:code/manage/email/",
    PathParam:{
      required:["code"],
      optional:[]
    }
  }

}

export default subscriptions;
