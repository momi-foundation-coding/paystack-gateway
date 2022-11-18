const route = "/paymentrequest";

const invoices = {
  createInvoice: {
    method: "post",
    route: route,
    bodyParams: {
      required: [ "customer", "amount"],
      optional: [
        "due_date", "description",
        "line_items","tax","currency", "send_notification",
        "draft","has_invoice", 
        "invoice_number","split_code"
      ]
    }
  },
  listInvoices: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage","page","customer",
      "status","currency","include_archive"
    ],
      optional: ["from","to"]
    }
  },
  viewInvoices: {
    method: "get",
    route: route + "/:id_or_code",
    queryParams: {
      required: [],
      optional: []
    }
  },
  verifyInvoices: {
    method: "get",
    route: route + "/verify/:code",
    queryParams: {
        required: [],
        optional: []
    }
  },
  sendNoticafication: {
    method: "post",
    route: route + "/notify:code",
    queryParams: {
        required: [],
        optional: []
    }
  },
  InvoiceTotal: {
    method: "get",
    route: route + "/totals",
    queryParams: {
        required: [],
        optional: []
    }
  },
  finalizeInvoice: {
    method: "post",
    route: route + "/finalize/:code",
    queryParams: {
      required: [],
      optional: []
    }
  },
  updateInvoice: {
    method: "put",
    route: route + "/id_or_code",
    queryParams: {
        required: [ "customer", "amount"],
        optional: ["due_date","description","line_items",
        "tax","currency", "send_notification",
        "draft","invoice_number","split_code"
               ]
    }
  },
  archiveInvoice: {
    method: "post",
    route: route + "/archive/:code",
    queryParams: {
      required: [],
      optional: []
    }
  },
}

export default invoices