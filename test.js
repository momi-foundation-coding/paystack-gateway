import Paystack from "./src/index.js"

const params = {
  email: "ezrqnkemboi@gmail.com",
  amount: 20000,
  currency: "ZAR"
}

const test = new Paystack(process.env.SECRET_KEY)

const testMethods = async () => {
  const data = await test.transactions.initialize(params)
  console.log({ data })
  const transactions = await test.transactions.list()
  console.log({ transactions })
}

testMethods()
