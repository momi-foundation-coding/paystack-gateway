const route = "/refund";

const refund = {
  createRefund: {
    method: "post",
    route: route,
    bodyParams: {
      required: ["transaction"],
      optional: ["amount", "currency", "customer_note", "customer_note"],
    },
  },
  listRefunds: {
    method: "get",
    route: route,
    queryParams: {
      required: ["reference", "currency"],
      optional: ["from", "to", "perPage", "page"],
    },
  },
  fetchRefund: {
    method: "get",
    route: route + "/:reference",
    pathParams: {
      required: ["reference"],
      optional: [""],
    },
  },
};

export default refund;
