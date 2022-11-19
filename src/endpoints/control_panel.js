const route = "/panel";

const controlPanel = {
  fetchPaymentSessionTimeout: {
    method: "get",
    route: route + "/fetch",
    queryParams: {
      required: [],
      optional: [],
    },
  },
  updatePaymentSessionTimeout: {
    method: "put",
    route: route + "/update",
    bodyParams: {
      required: ["timeout"],
      optional: [],
    },
  },
};

export default controlPanel;
