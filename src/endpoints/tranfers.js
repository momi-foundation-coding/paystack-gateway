const route = "/transfer";

const transfers = {
  initiateTransfer: {
    route: route,
    method: "post",
    bodyParams: {
      required: ["source", "amount", "recipient"],
      optional: ["reason", "currency", "reference"],
    },
  },
  finalizeTransfer: {
    route: route + "/finalize_transfer",
    method: "post",
    bodyParams: {
      required: ["transfer_code", "otp"],
      optional: [],
    },
  },
  initiateBulkTransfer: {
    route: route + "/bulk",
    method: "post",
    bodyParams: {
      required: ["source", "transfers"],
      optional: [],
    },
  },
  listTransfers: {
    route: route,
    method: "get",
    queryParams: {
      required: ["perPage", "page", "customer"],
      optional: ["from", "to"],
    },
  },
  fetchTransfer: {
    route: route + "/:id_or_code",
    method: "get",
    pathParams: {
      required: ["id_or_code"],
      optional: [],
    },
  },
  verifyTransfer: {
    route: route + "/verify/:reference",
    method: "get",
    pathParams: {
      required: ["reference"],
      optional: [],
    },
  },
};
export default transfers;
