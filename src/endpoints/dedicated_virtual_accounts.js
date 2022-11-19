const route = "/dedicated_account";

const dedicated_account = {
  CreateDedicatedVirtual: {
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
  AssignDedicatedVirtualAccount: {
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
  ListDedicatedAccounts: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["active", "currency"],
      optional: ["provider_slug", "bank_id", "customer"],
    },
  },
  FetchDedicatedAccount: {
    method: "get",
    route: route + "/:dedicated_account_id",
    PathParam: {
      required: ["dedicated_account_id"],
      optional: [],
    },
  },
  RequeryDedicatedAccount: {
    method: "get",
    route: route,
    QueryParam: {
      required: ["account_number", "provider_slug"],
      optional: ["date"],
    },
  },
  DeactivateDedicatedAccount: {
    method: "del",
    route: route + ":dedicated_account_id",
    PathParam: {
      required: ["dedicated_account_id"],
      optional: [],
    },
  },
  SplitDedicatedAccountTransaction: {
    method: "post",
    route: route + "/split",
    BodyParam: {
      required: ["customer"],
      optional: ["subaccount", "split_code", "preferred_bank"],
    },
  },
  RemoveSplitFromDedicatedAccount: {
    method: "del",
    route: route + "/split",
    BodyParam: {
      required: ["account_number"],
      optional: [],
    },
  },
  FetchBankProviders: {
    method: "get",
    route: route + "/available_providers",
  },
};
