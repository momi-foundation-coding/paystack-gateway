![npm](https://img.shields.io/npm/dt/paystack-gateway?style=for-the-badge)
# Paystack Gateway

This is a wrapper that is used to make it easy to interface with Paystack API. 

# How To Use

npm

`npm i paystack-gateway`

yarn 

`yarn add paystack-gateway`

# Sample Code 

Apart from the example below, other examples can be found inside `real-sample`

```js
import Paystack from "paystack-gateway-test"

const paystackInstance = new Paystack(process.env.SECRET_KEY) // secret key should be passed

// Get transactions
const queryParams = {
   perPage: 20
}

const transactions = await paystackInstance.transactions.list({ queryParams })

// Initialize transactions
const bodyParams = {
   email: "ezrqnkemboi@gmail.com",
   amount: 20000,
   currency: "ZAR"
}
const initializedTransaction = await paystackInstance.transactions.initialize({ bodyParams: bodyParams })

```

# Contributors
<a href="https://github.com/momi-foundation-coding/paystack-gateway/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=momi-foundation-coding/paystack-gateway"  width="150" />
</a>

# License
[MIT](https://github.com/momi-foundation-coding/paystack-gateway/blob/main/LICENSE)

