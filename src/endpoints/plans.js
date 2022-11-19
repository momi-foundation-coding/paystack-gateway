const route = '/plan'

const plans = {
  createPlan: {
    method: "post",
    route: route,
    bodyParams: {
      required: ["name", "amount", "interval"],
      optional: ["description", "send_invoices", "send_sms", "currency", "invoice_limit"]
    }
  },
  listPlans: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage", "page"],
      optional: ["status", "interval", "amount",]
    }
  },
  FetchPlans: {
    method: "get",
    route: route + ":id_or_code",
    bodyParams: {
      require: ["id_or_code"]
    }
  
  }

}

export default plans
