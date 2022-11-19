const route = "/payment";

const paymentPages = {
  createPages: {
    route: route,
    method: "post",
    bodyParams: {
      required: ["name"],
      optional: [
        "description",
        "amount",
        "slug",
        "metadata",
        "redirect_url",
        "custom_fields",
      ],
    },
  },
  listPages: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage", "page"],
      optional: ["from", "to"],
    },
  },

  fetchPage: {
    method: "get",
    route: route + ":/id",
    queryParams: {
      required: ["id"],
      optional: [],
    },
  },
  updatePage: {
    method: "put",
    route: route + ":/id",
    queryParams: {
      required: ["id"],
      optional: [],
    },
    bodyParams: {
      required: ["name", "description"],
      optional: ["amount", "active"],
    },
  },
  checkSlugAvailability: {
    method: "post",
    route: route,
    pathParams: {
      required: ["slig"],
      optional: [],
    },
  },
  addProducts: {
    route: route,
    method: "put",
    Headers: {
      required: ["id"],
      optional: [],
    },
    bodyParams: {
      required: ["product"],
      optional: [],
    },
  },
};

export default paymentPages;
