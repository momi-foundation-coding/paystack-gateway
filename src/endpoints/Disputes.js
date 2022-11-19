const route = "/disputes";

const disputes = {
  listDisputes: {
    route: route,
    method: "post",
    queryParams: {
      request: ["from", "to"],
      optional: ["perPage", "page", "transaction", "status"],
    },
  },
  fetchDispute: {
    route: route + "/id",
    method: "get",
    pathParams: {
      required: ["id"],
      optional: [],
    },
  },
  listTransactionDisputes: {
    route: route + "/id",
    method: "get",
    pathParams: {
      required: ["id"],
      optional: [],
    },
  },
  updateDispute: {
    route: route + "id",
    method: "put",
    pathParams: {
      required: ["id"],
      optional: [],
    },
    bodyParams: {
      required: ["refund_amount"],
      optional: ["uploaded_filename"],
    },
  },
  addEvidence: {
    route: route,
    method: "get",
    bodyParams: {
      required: [
        "customer_email",
        "customer_name",
        "customer_phone",
        "service_details",
      ],
      optional: ["delivery_address", "delivery_date"],
    },
  },
  getUploadUrl: {
    route: route + "/id",
    method: "get",
    pathParams: {
      required: ["id"],
      optional: [],
    },
    queryParams: {
      required: ["upload_filename"],
      optional: [],
    },
  },
  resolveADispute: {
    route: route + "/id",
    method: "get",
    pathParams: {
      required: ["id"],
      optional: [],
    },
    bodyParams: {
      required: ["resolution", "message", "refund_amount", "uploaded_filename"],
      optional: ["evidence"],
    },
  },
  exportDisputes: {
    route: route,
    method: "put",
    queryParams: {
      required: ["from", "to"],
      optional: ["perPage", "page", "transaction", "status"],
    },
  },
};

export default disputes;
