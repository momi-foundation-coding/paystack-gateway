
import dotenv from 'dotenv'
import Paystack from "paystack-gateway-test"
import express from 'express'
import bodyParser from 'body-parser'

dotenv.config()
const paystackInstance = new Paystack(process.env.SECRET_KEY)
const app = express()
const port = 3000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// bodyParams, pathParams, queryParams
app.get('/', async (req, res) => {
  try {
    const queryParams = req.query // can do own validation here
    const transactions = await paystackInstance.transactions.list({ queryParams })
    res.status(200).send(transactions)
  } catch(error) {
    console.error({ error })
    res.send("Error occurred")
  }
})

app.post('/', async (req, res) => {
  try {
    const bodyParams = req.body // can do own validation here
    const data = await paystackInstance.transactions.initialize({ bodyParams: bodyParams })
    res.status(201).send(data)
  } catch(error) {
    console.error({ error })
    res.send("Error occurred")
  }
})

app.listen(port, () => {
  console.log(`App listening to ${port}`)
})
