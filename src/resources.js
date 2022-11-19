// import different resource with its methods
import transactions from './endpoints/transactions.js'
import customers from './endpoints/customers.js'
import transactionSplits from './endpoints/transaction_splits.js'
import products from './endpoints/products.js'
import subscriptions from './endpoints/subscriptions.js'
import plans from './endpoints/plans.js'
import invoices from './endpoints/invoices.js'
import trasferrecipients from './endpoints/transferRecipients.js'

// define all existing resources here
const resources = {
  transactions,
  customers,
  transactionSplits,
  products,
  subscriptions,
  plans,
  invoices,
  trasferrecipients,
}

export default resources
