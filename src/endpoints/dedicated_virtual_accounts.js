const route = "/dedicated_account";

const dedicatedVirtualAccounts = {
  createDedicatedVirtual: {
    method: "post",
    route: route,
    BodyParam: {
      required: ["customer"],
      optional: [
        "preferred_bank",
        "subaccount",
        "split_code",
        "first_name",
        "last_name",
        "phone",
      ],
    },
  },
  assignDedicatedVirtualAccount: {
    method: "post",
    route: route + "/assign",
    BodyParam: {
      required: [
        "email",
        "first_name",
        "last_name",
        "phone",
        "preferred_bank",
        "country",
      ],
      optional: [
        "account_number",
        "bvn",
        "bank_code",
        "subaccount",
        "split_code",
      ],
    },
  },
  listDedicatedAccounts: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["active", "currency"],
      optional: ["provider_slug", "bank_id", "customer"],
    },
  },
  fetchDedicatedAccount: {
    method: "get",
    route: route + "/:dedicated_account_id",
    PathParam: {
      required: ["dedicated_account_id"],
      optional: [],
    },
  },
  requeryDedicatedAccount: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["account_number", "provider_slug"],
      optional: ["date"],
    },
  },
  deactivateDedicatedAccount: {
    method: "del",
    route: route + ":dedicated_account_id",
    PathParam: {
      required: ["dedicated_account_id"],
      optional: [],
    },
  },
  splitDedicatedAccountTransaction: {
    method: "post",
    route: route + "/split",
    BodyParam: {
      required: ["customer"],
      optional: ["subaccount", "split_code", "preferred_bank"],
    },
  },
  removeSplitFromDedicatedAccount: {
    method: "del",
    route: route + "/split",
    BodyParam: {
      required: ["account_number"],
      optional: [],
    },
  },
  fetchBankProviders: {
    method: "get",
    route: route + "/available_providers",
  },
};

export default dedicatedVirtualAccounts;
