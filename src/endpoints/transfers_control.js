const balanceRoute = "/balance"
const transferRoute = "/transfer"

const transfersControl = {
    checkBalance:{
        route:balanceRoute,
        method:"get",
    },
    fetchBalanceLedger:{
        route:balanceRoute + "/ledger",
        method:"get",
    },
    resendTransferOtp:{
        route:transferRoute + "/resend_otp",
        method:"post",
        bodyParams:{
            required:["transfer_code", "reason"],
            optional:[]
        }
    },
    disableTransferOtp:{
        route:transferRoute + "/disable_otp",
        method:"post",
        bodyParams:{
            required:[]
        }
    },
    finalizeDisableOtp:{
        route:transferRoute + "/disable_otp_finalize",
        method:"post",
        bodyParams:{
            required:["otp"],
            optional:[]
        }
    },
    enableTransferOtp:{
        route:transferRoute + "/enable_otp",
        method:"post",
        bodyParams:{
            required:[]
        }
    }
}

export default transfersControl