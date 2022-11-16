import dotenv from 'dotenv'
import Paystack from "./src/index.js" // assume this is import of the package

dotenv.config()

const params = {
  email: "ezrqnkemboi@gmail.com",
  amount: 20000,
  currency: "ZAR"
}

const paystackInstance = new Paystack(process.env.SECRET_KEY)

const testMethods = async () => {
  const data = await paystackInstance.transactions.initialize(params)
  console.log({ data })
  const transactions = await paystackInstance.transactions.list()
  console.log({ transactions })
}

testMethods()
