const route = "/dedicated_account";

const dedicatedVirtualAccounts = {
  createDedicatedVirtual: {
    method: "post",
    route: route,
    bodyParams: {
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
    bodyParams: {
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
    queryParams: {
      required: ["active", "currency"],
      optional: ["provider_slug", "bank_id", "customer"],
    },
  },
  fetchDedicatedAccount: {
    method: "get",
    route: route + "/:dedicated_account_id",
    pathParams: {
      required: ["dedicated_account_id"],
      optional: [],
    },
  },
  requeryDedicatedAccount: {
    method: "get",
    route: route,
    queryParams: {
      required: ["account_number", "provider_slug"],
      optional: ["date"],
    },
  },
  deactivateDedicatedAccount: {
    method: "del",
    route: route + ":dedicated_account_id",
    pathParams: {
      required: ["dedicated_account_id"],
      optional: [],
    },
  },
  splitDedicatedAccountTransaction: {
    method: "post",
    route: route + "/split",
    bodyParams: {
      required: ["customer"],
      optional: ["subaccount", "split_code", "preferred_bank"],
    },
  },
  removeSplitFromDedicatedAccount: {
    method: "del",
    route: route + "/split",
    bodyParams: {
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
