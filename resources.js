// import different resource with its methods
import transactions from "./endpoints/transactions.js";
import customers from "./endpoints/customers.js";
import transactionSplits from "./endpoints/transaction_splits.js";
import products from "./endpoints/products.js";
import subscriptions from "./endpoints/subscriptions.js";
import plans from "./endpoints/plans.js";
import invoices from "./endpoints/invoices.js";
import transfersControl from "./endpoints/transfers_control.js";
import trasferrecipients from "./endpoints/transferRecipients.js";
import apple_pay from "./endpoints/apple_pay.js";
// define all existing resources here
const resources = {
  transactions,
  customers,
  transactionSplits,
  products,
  subscriptions,
  plans,
  invoices,
  apple_pay,
  transfersControl,
  trasferrecipients,
};

export default resources;
