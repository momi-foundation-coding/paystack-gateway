const route = "/bulkcharge";

const bulkcharge = {
  InitiateBulkCharge: {
    method: "post",
    route: route,
    BodyParam: {
      required: ["(no name)"],
      optional: [],
    },
  },
  ListBulkChargeBatches: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["perPage", "page"],
      optional: ["from", "to"],
    },
  },
  FetchBulkChargeBatch: {
    method: "get",
    route: route + "/:id_or_code",
    PathParam: {
      required: ["id_or_code"],
      optional: [],
    },
  },
  FetchChargesinaBatch: {
    method: "get",
    route: route + "/:id_or_code/charges",
    QueryParam: {
      required: ["status", "perPage", "page"],
      optional: ["from", "to"],
    },
  },
  PauseBulkChargeBatch: {
    method: "get",
    route: route + "/pause/:batch_code",
    PathParam: {
      required: ["batch_code"],
      oiptional: [],
    },
  },
  ResumeBulkChargeBatch: {
    method: "get",
    route: route + "/resume/:batch_code",
    Pathparam: {
      required: ["batch_code"],
      optional: [],
    },
  },
};

export default bulkcharge;
