const route = "/subscriptions"

const subscriptions = {
  create: {
    method: "post",
    route: route,
    bodyParam: {
      require: ["customer", "plan", "authorization"],
      optional: ["start_date"]
    }
  }
}

export default subscriptions;
