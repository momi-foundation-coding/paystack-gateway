const route = "/bank";

const verification = {
  resolveAccountNumber: {
    method: "get",
    route: route + "/resolve",
    queryParams: {
      required: ["account_number", "bank_code"],
      optional: [],
    },
  },
  validateAccount: {
    method: "post",
    route: route + "/validate",
    bodyParams: {
      required: [
        "account_name",
        "account_number",
        "account_number",
        "bank_code",
        "country_code",
        "document_type",
      ],
      optional: [],
    },
  },
  resolveCardBIN: {
    method: "get",
    route: route + "/bin/:bin",
    pathParams: {
      required: ["bin"],
      optional: [""],
    },
  },
};

export default verification;
