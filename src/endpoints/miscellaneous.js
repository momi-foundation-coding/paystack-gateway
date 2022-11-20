const miscellaneous = {
  listBanks: {
    method: "get",
    route: "/bank",
    queryParams: {
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
  listCountries: {
    method: "get",
    route: "/country",
  },
  listStates: {
    method: "get",
    route: "/address_verification/states",
    queryParams: {
      required: ["country"],
      optional: [],
    },
  },
};

export default miscellaneous;
