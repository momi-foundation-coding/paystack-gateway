const route = "/split";

const transactionSplits = {
    createSplit:{
        route:route,
        method:"post",
        bodyParams:{
            required:["name", "type", "currency", "subaccounts", "bearer_type", "bearer_subaccount"],
            optional:[]
        }
    },
    listSplit:{
        route:route,
        method:"get",
        queryParams:{
            required:["name", "active"],
            optional:["sort_by", "perPage", "page", "from", "to"]
        }
    },
    fetchSplit:{
        route:route + ":/id",
        method:"get",
        queryParams:{
            required:["id"],
            optional:[]
        }
    },
    updateSplit:{
        route:route +":/id",
        method:"put",
        queryParams:{
            required:["id"],
            optional:[]
        },
        bodyParams:{
            required:["name", "active"],
            optional:["bearer_type", "bearer_subaccount"]
        }
    },
    createSplitSubaccount:{
        route:route + "/:id/subaccount/add",
        method:"post",
        pathParams:{
            required:["id"],
            optional:[]
        },
        bodyParams:{
            required:["subaccount", "share"],
            optional:[]
        }
    },
    removeSplitSubaccount:{
        route:route + "/:id/subaccount/remove",
        method:"post",
        pathParams:{
            required:["id"],
            optional:[]
        },
        bodyParams:{
            required:["subaccount"],
            optional:[]
        }
    }
}

export default transactionSplits 
