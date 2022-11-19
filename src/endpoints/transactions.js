const route = "/transaction";

const transactions = {
  initialize: {
    method: "post",
    route: route + "/initialize",
    bodyParams: {
      required: ["amount", "email"],
      optional: [
        "currency",
        "reference",
        "callback_url",
        "plan",
        "invoice_limit",
        "metadata",
        "channels",
        "split_code",
        "subaccount",
        "transaction_charge",
        "bearer",
      ],
    },
  },
  verify: {
    method: "get",
    route: route + "/verify/:reference",
    queryParams: {
      required: ["reference"],
      optional: [],
    },
  },
  list: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage"],
      optional: [],
    },
  },
  fetchTransaction: {
    method: "get",
    route: route + "/:id",
    pathParams: {
      required: ["id"],
      optional: [],
    },
  },
  chargeAuthorization: {
    method: "post",
    route: route + "/charge_authorization",
    bodyParams: {
      required: ["amount", "email", "authorization_code"],
      optional: [
        "reference",
        "currency",
        "metadata",
        "channels",
        "subaccount",
        "transaction_charge",
        "bearer",
        "queue",
      ],
    },
  },
  checkAuthorization: {
    method: "post",
    route: route + "/check_authorization",
    bodyParams: {
      required: ["amount", "email", "authorization_code"],
      optional: ["currency"],
    },
  },
  viewTransactionTimeline: {
    method: "get",
    route: route + "/timeline/:id_or_reference",
    pathParams: {
      required: ["id_or_reference"],
      optional: [],
    },
  },
  transactionTotal: {
    method: "get",
    route: route + "/totals",
    pathParams: {
      required: ["perPage", "page"],
      optional: ["from", "to"],
    },
  },
  eportTransactions: {
    method: "get",
    route: route + "/export",
    queryParams: {
      required: ["perPage", "page"],
      optional: [
        "from",
        "to",
        "status",
        "currency",
        "amount",
        "settled",
        "settlement",
        "payment_page",
      ],
    },
  },
  partialDebit: {
    method: "post",
    route: route + "/partial_debit",
    bodyParams: {
      required: ["authorization_code", "currency", "amount", "email"],
      optional: ["reference", "at_least"],
    },
  },
};

export default transactions;
