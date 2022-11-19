const route = "/transfer";

const transfers = {
  InitiateTransfer: {
    method: "post",
    route: route,
    BodyParam: {
      required: ["source", "amount", "recipient"],
      optional: ["reason", "currency", "reference"],
    },
  },
  FinalizeTransfer: {
    method: "post",
    route: route + "/finalize_transfer",
    BodyParam: {
      required: ["transfer_code", "otp"],
      optional: [],
    },
  },
  InitiateBulkTransfer: {
    method: "post",
    route: route + "/bulk",
    BodyParam: {
      required: ["source", "transfers"],
      optional: [],
    },
  },

  ListTransfers: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["perPage", "page", "customer"],
      optional: ["from", "to"],
    },
  },
  FetchTransfer: {
    method: "get",
    route: route + "/:id_or_code",
    PathParam: {
      required: ["id_or_code"],
      optional: [],
    },
  },
  VerifyTransfer: {
    method: "get",
    route: route + "/verify/:reference",
    PathParam: {
      required: ["reference"],
      optional: [],
    },
  },
};

export default transfers;
