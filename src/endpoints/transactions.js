const route = "/transaction";

const transactions = {
  initialize: {
    method: "post",
    route: route + "/initialize",
    bodyParams: {
      required: [ "amount", "email"],
      optional: [
        "currency", "reference", 'callback_url', 'plan', 
        'invoice_limit', 'metadata', 'channels', 'split_code', 
        'subaccount', 'transaction_charge', 'bearer'
      ]
    }
  },
  verify: {
    method: "get",
    route: route + "/verify/:reference",
    queryParams: {
      required: ["reference"],
      optional: []
    }
  },
  list: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage"],
      optional: []
    }
  },
  fetchTransaction: {
    method: "get",
    route: route + "/:id"
  }
}

export default transactions 
