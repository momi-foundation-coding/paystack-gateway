// import different resource with its methods
import transactions from './endpoints/transactions.js'
import customers from './endpoints/customers.js'
import transactionSplits from './endpoints/transaction_splits.js'
import products from './endpoints/products.js'
import subscriptions from './endpoints/Subscriptions.js'
import plans from './endpoints/plans.js'
import invoices from './endpoints/invoices.js'

// define all existing resources here
const resources = {
  transactions,
  customers,
  transactionSplits,
  products,
  subscriptions,
  plans,
  invoices,
}

export default resources
