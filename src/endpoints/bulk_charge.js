const route = "/bulkcharge";

const bulkCharge = {
  initiateBulkCharge: {
    method: "post",
    route: route,
    BodyParam: {
      required: ["(no name)"],
      optional: [],
    },
  },
  listBulkChargeBatches: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["perPage", "page"],
      optional: ["from", "to"],
    },
  },
  fetchBulkChargeBatch: {
    method: "get",
    route: route + "/:id_or_code",
    PathParam: {
      required: ["id_or_code"],
      optional: [],
    },
  },
  fetchChargesinaBatch: {
    method: "get",
    route: route + "/:id_or_code/charges",
    QueryParam: {
      required: ["status", "perPage", "page"],
      optional: ["from", "to"],
    },
  },
  pauseBulkChargeBatch: {
    method: "get",
    route: route + "/pause/:batch_code",
    PathParam: {
      required: ["batch_code"],
      oiptional: [],
    },
  },
  resumeBulkChargeBatch: {
    method: "get",
    route: route + "/resume/:batch_code",
    Pathparam: {
      required: ["batch_code"],
      optional: [],
    },
  },
};

export default bulkCharge;
