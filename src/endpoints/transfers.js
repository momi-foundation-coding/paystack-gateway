const route = "/transfer";

const transfers = {
  initiateTransfer: {
    method: "post",
    route: route,
    bodyParams: {
      required: ["source", "amount", "recipient"],
      optional: ["reason", "currency", "reference"],
    },
  },
  finalizeTransfer: {
    method: "post",
    route: route + "/finalize_transfer",
    bodyParams: {
      required: ["transfer_code", "otp"],
      optional: [],
    },
  },
  initiateBulkTransfer: {
    method: "post",
    route: route + "/bulk",
    bodyParams: {
      required: ["source", "transfers"],
      optional: [],
    },
  },

  listTransfers: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage", "page", "customer"],
      optional: ["from", "to"],
    },
  },
  fetchTransfer: {
    method: "get",
    route: route + "/:id_or_code",
    pathParams: {
      required: ["id_or_code"],
      optional: [],
    },
  },
  verifyTransfer: {
    method: "get",
    route: route + "/verify/:reference",
    pathParams: {
      required: ["reference"],
      optional: [],
    },
  },
};

export default transfers;
