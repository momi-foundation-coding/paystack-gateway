const route = "/integration";

const intergration = {
    FetchPaymentSessionTimeout: {
        method: "get",
        route: route + "/payment_session_timeout",

    },
    UpdatePaymentSessionTimeout: {
        method: "put",
        route: route + "/payment_session_timeout",
        BodyParam: {
            required: ["timeout"],
            optional: []
        }
    },
    
}