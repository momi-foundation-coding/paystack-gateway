const route = "/transfer";

const transfers = {
  initiateTransfer: {
    method: "post",
    route: route,
    BodyParam: {
      required: ["source", "amount", "recipient"],
      optional: ["reason", "currency", "reference"],
    },
  },
  finalizeTransfer: {
    method: "post",
    route: route + "/finalize_transfer",
    BodyParam: {
      required: ["transfer_code", "otp"],
      optional: [],
    },
  },
  initiateBulkTransfer: {
    method: "post",
    route: route + "/bulk",
    BodyParam: {
      required: ["source", "transfers"],
      optional: [],
    },
  },

  listTransfers: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["perPage", "page", "customer"],
      optional: ["from", "to"],
    },
  },
  fetchTransfer: {
    method: "get",
    route: route + "/:id_or_code",
    PathParam: {
      required: ["id_or_code"],
      optional: [],
    },
  },
  verifyTransfer: {
    method: "get",
    route: route + "/verify/:reference",
    PathParam: {
      required: ["reference"],
      optional: [],
    },
  },
};

export default transfers;
