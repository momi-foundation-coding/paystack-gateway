// import different resource with its methods
import transactions from './endpoints/transactions.js'
import customers from './endpoints/customers.js'
import transactionSplits from './endpoints/transaction_splits.js'
import products from './endpoints/products.js'

// define all existing resources here
const resources = {
  transactions,
  customers,
  transactionSplits,
  products
}

export default resources
