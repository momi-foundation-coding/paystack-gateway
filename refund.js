const route = "/refund";

const refund = {
  createRefund: {
    method: "post",
    route: route,
    BodyParam: {
      required: ["transaction"],
      optional: ["amount", "currency", "customer_note", "customer_note"],
    },
  },
  listRefunds: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["reference", "currency"],
      optional: ["from", "to", "perPage", "page"],
    },
  },
  fetchRefund: {
    method: "get",
    route: route + "/:reference",
    PathParam: {
      required: ["reference"],
      optional: [""],
    },
  },
};

export default refund;
