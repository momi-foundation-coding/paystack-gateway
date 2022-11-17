import dotenv from 'dotenv'
import Paystack from "./src/index.js" // assume this is import of the package

dotenv.config()

const paystackInstance = new Paystack(process.env.SECRET_KEY)

const testMethods = async () => {
  // can pass bodyParams, pathParams, queryParams
  const bodyParams = {
    email: "ezrqnkemboi@gmail.com",
    amount: 20000,
    currency: "ZAR"
  }
  const data = await paystackInstance.transactions.initialize({ bodyParams: bodyParams })
  console.log({ data })
  const queryParams = {
    perPage: 2
  }
  const transactions = await paystackInstance.transactions.list({ queryParams: queryParams })
  console.log({ transactions })
}

testMethods()
