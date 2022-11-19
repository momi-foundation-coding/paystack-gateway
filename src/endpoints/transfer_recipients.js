const route = "/transferrecipient";

const transferRecipients = {
  createTransferRecipient: {
    method: "post",
    route: route,
    bodyParams: {
      required: [ "type","name", "account_number","bank_code"],
      optional: [
        "description", "currency", "authorization_code",
        "metadata"
      ]
    }
  },
  bulkCreateTransferRecipient: {
    method: "post",
    route: route + "/bulk",
    queryParams: {
      required: ["type","name","bank_code"],
      optional: []
    }
  },
  listTransferRecipient: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage","page"],
      optional: ["from","to"]
    }
  },
  fetchTransferRecipient: {
    method: "get",
    route: route + "/:id_or_code",
    queryParams: {
        required: [ "id_or_code"],
        optional: []
    }
  },
  updateTransferRecipient: {
    method: "put",
    route: route + "/:id_or_code",
    queryParams: {
        required: [ "name"],
        optional: ["email"]
    }
  },
  deleteTransferRecipient: {
    method: "delete",
    route: route + "/:id_or_code",
    queryParams: {
        required: [],
        optional: []
    }
  },
}

export default transferRecipients
