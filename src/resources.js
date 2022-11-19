// import different resource with its methods
import transactions from "./endpoints/transactions.js";
import customers from "./endpoints/customers.js";
import transactionSplits from "./endpoints/transaction_splits.js";
import products from "./endpoints/products.js";
import subscriptions from "./endpoints/subscriptions.js";
import plans from "./endpoints/plans.js";
import invoices from "./endpoints/invoices.js";
import settlements from "./endpoints/settlements.js";
import transfersControl from "./endpoints/transfers_control.js";
import trasferrecipients from "./endpoints/transferRecipients.js";
import transfers from "./endpoints/transfers.js";
import bulkcharge from "./endpoints/bulkcharge.js";

// define all existing resources here
const resources = {
  transactions,
  customers,
  transactionSplits,
  products,
  subscriptions,
  plans,
  invoices,
  settlements,
  transfersControl,
  trasferrecipients,
  transfers,
  bulkcharge,
};

export default resources;
