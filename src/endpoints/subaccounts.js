const root = "/subaccounts";

const subaccounts = {
  createSubaccount: {
    route: route,
    method: "post",
    bodyParams: {
      required: [
        "business_name",
        "settlement_bank",
        "account_number",
        "percentage_charge",
        "description",
      ],
      optional: [
        "primary_contact_email",
        "primary_contant_name",
        "primary_contact_phone",
        "metadata",
      ],
    },
    listSubAccounts: {
      route: route,
      method: "put",
      queryParams: {
        required: ["perPage", "page"],
        optional: ["from", "to"],
      },
    },
    fetchSubAccount: {
      route: route + "/id",
      method: "get",
      pathParams: {
        required: ["id"],
        optional: [],
      },
    },
    updateSubAccount: {
      route: route + "/id",
      method: "put",
      bodyParams: {
        required: ["business_name", "settlement_bank"],
        optional: [
          "account_number",
          "active",
          "percentage_change",
          "description",
          "primary_contact_name",
          "primary_contact_email",
          "primary_contact_phone",
          "settlement_schedule",
          "metadata",
        ],
      },
    },
  },
};

export default subaccounts;
