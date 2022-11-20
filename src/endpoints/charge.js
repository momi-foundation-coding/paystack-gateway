const route = "/charge";

const charge = {
  createCharge: {
    method: "post",
    route: route,
    bodyParams: {
      required: ["email", "amount"],
      optional: [
        "bank",
        "authorization_code",
        "pin",
        "metadata",
        "reference",
        "ussd",
        "mobile_money",
        "device_id",
      ],
    },
  },
  submitPIN: {
    method: "post",
    route: route + "/submit-pin",
    bodyParams: {
      required: ["pin", "reference"],
      optional: [],
    },
  },
  submitOTP: {
    method: "post",
    route: route + "/submit-otp",
    bodyParams: {
      required: ["otp", "reference"],
      optional: [],
    },
  },
  submitPhone: {
    method: "post",
    route: route + "submit-phone",
    bodyParams: {
      required: ["phone", "reference"],
      optional: [],
    },
  },
  submitBirthday: {
    method: "post",
    route: route + "/submit_birthday",
    bodyParams: {
      required: ["birthday", "reference"],
      optional: [],
    },
  },
  submitAddress: {
    method: "post",
    route: route + "/submit_address",
    bodyParams: {
      required: ["address", "reference", "city", "state", "zipcode"],
      optional: [],
    },
  },
  checkPendingCharge: {
    method: "get",
    route: route + "/:reference",
    pathParams: {
      required: ["reference"],
    },
  },
};

export default charge;
