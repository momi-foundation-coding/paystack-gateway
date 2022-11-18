const route = "/product";

const products = {
  createProduct: {
    method: "post",
    route: route,
    bodyParams: {
      required: [ "name", "description","price","currency"],
      optional: [
        "unlimited", "quantity"
      ]
    }
  },
  listProduct: {
    method: "get",
    route: route,
    queryParams: {
      required: ["perPage","page"],
      optional: ["from","to"]
    }
  },
  fetchProduct: {
    method: "get",
    route: route,
    queryParams: {
      required: ["id"],
      optional: []
    }
  },
  updateProduct: {
    method: "put",
    route: route + "/{id}",
    queryParams: {
        required: [ "name", "description","price","currency"],
        optional: [
          "unlimited", "quantity"
        ]
    }
  },
}

export default products