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
import controlPanel from "./endpoints/control_panel.js";
import verification from "./endpoints/verification.js";
import miscellaneous from "./endpoints/miscellaneous.js";
import applePay from "./endpoints/apple_pay.js";
import charge from "./endpoints/charge.js";

// define all existing resources here
const resources = {
  transactions,
  charge,
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
  controlPanel,
  verification,
  miscellaneous,
  applePay,
};

export default resources;
