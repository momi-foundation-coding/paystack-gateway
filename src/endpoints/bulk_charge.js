const route = "/bulkcharge";

const bulkCharge = {
  initiateBulkCharge: {
    method: "post",
    route: route,
    bodyParams: {
      required: ["(no name)"],
      optional: [],
    },
  },
  listBulkChargeBatches: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage", "page"],
      optional: ["from", "to"],
    },
  },
  fetchBulkChargeBatch: {
    method: "get",
    route: route + "/:id_or_code",
    pathParams: {
      required: ["id_or_code"],
      optional: [],
    },
  },
  fetchChargesinaBatch: {
    method: "get",
    route: route + "/:id_or_code/charges",
    queryParams: {
      required: ["status", "perPage", "page"],
      optional: ["from", "to"],
    },
  },
  pauseBulkChargeBatch: {
    method: "get",
    route: route + "/pause/:batch_code",
    pathParams: {
      required: ["batch_code"],
      oiptional: [],
    },
  },
  resumeBulkChargeBatch: {
    method: "get",
    route: route + "/resume/:batch_code",
    pathParams: {
      required: ["batch_code"],
      optional: [],
    },
  },
};

export default bulkCharge;
