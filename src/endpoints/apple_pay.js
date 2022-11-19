const route = "/apple-pay";

const applePay = {
  registerDomain: {
    method: "post",
    route: route + "/domain",
    BodyParam: {
      required: ["domainName"],
      optional: [],
    },
  },
  listDomains: {
    method: "get",
    route: route + "/domain",
    BodyParam: {
      required: [],
      optional: [],
    },
  },
  unregisterDomain: {
    method: "del",
    route: route + "/domain",
    BodyParam: {
      required: ["domainName"],
      optional: [],
    },
  },
};
export default applePay;
