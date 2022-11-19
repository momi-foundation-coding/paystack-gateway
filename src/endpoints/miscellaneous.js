const miscellaneous = {
  ListBanks: {
    method: "get",
    route: "/bank",
    QueryParam: {
      required: ["country", "use_cursor", "perPage"],
      optional: [
        "pay_with_bank_transfer",
        "pay_with_bank",
        "next",
        "previous",
        "gateway",
        "type",
        "currency",
      ],
    },
  },
  ListCountries: {
    method: "get",
    route: "country",
  },
  ListStates: {
    method: "get",
    route: "/address_verification" + "/states",
    QueryParam: {
      required: ["country"],
      optional: [],
    },
  },
};

export default miscellaneous;
