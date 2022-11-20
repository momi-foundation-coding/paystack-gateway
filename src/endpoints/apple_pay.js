const route = "/apple-pay";

const applePay = {
  registerDomain: {
    method: "post",
    route: route + "/domain",
    bodyParams: {
      required: ["domainName"],
      optional: [],
    },
  },
  listDomains: {
    method: "get",
    route: route + "/domain",
    bodyParams: {
      required: [],
      optional: [],
    },
  },
  unregisterDomain: {
    method: "delete",
    route: route + "/domain",
    bodyParams: {
      required: ["domainName"],
      optional: [],
    },
  },
};
export default applePay;
