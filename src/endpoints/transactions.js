const route = "/transaction";

const transactions = {
  initialize: {
    method: "post",
    route: route + "/initialize",
    params: {
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
    args: {
      required: ["reference"],
      optional: []
    }
  },
  list: {
    method: "get",
    route: route,
    args: {
      required: [],
      optional: []
    }
  },
}

export default transactions 
