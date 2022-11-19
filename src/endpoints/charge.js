const route = "/charge";

const charge = {
  createCharge: {
    method: "post",
    route: route,
    BodyParam: {
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
    BodyParam: {
      required: ["pin", "reference"],
      optional: [],
    },
  },
  submitOTP: {
    method: "post",
    route: route + "/submit-otp",
    BodyParam: {
      required: ["otp", "reference"],
      optional: [],
    },
  },
  submitPhone: {
    method: "post",
    route: route + "submit-phone",
    BodyParam: {
      required: ["phone", "reference"],
      optional: [],
    },
  },
  submitBirthday: {
    method: "post",
    route: route + "/submit_birthday",
    BodyParam: {
      required: ["birthday", "reference"],
      optional: [],
    },
  },
  submitAddress: {
    method: "post",
    route: route + "/submit_address",
    BodyParam: {
      required: ["address", "reference", "city", "state", "zipcode"],
      optional: [],
    },
  },
  checkPendingCharge: {
    method: "get",
    route: route + "/:reference",
    PathParam: {
      required: ["reference"],
    },
  },
};

export default charge;
