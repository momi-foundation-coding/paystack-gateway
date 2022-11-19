const route = "/settlement";

const settlements = {
  fetchSettlement: {
    method: "get",
    route: route,
    bodyParams: {
      required: ["perPage", "page"],
      optional: ["from", "to"],
    },
  },
  fetchSettlementTransactions: {
    method: "get",
    route: route + "/:id/transactions",
    queryParams: {
      required: ["perPage", "page"],
      optional: ["from", "to"],
    },
  },
};

export default settlements;
