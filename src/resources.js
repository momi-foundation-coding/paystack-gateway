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
import transferRecipients from "./endpoints/transfer_recipients.js";
import transfers from "./endpoints/transfers.js";
import bulkcharge from "./endpoints/bulk_charge.js";
import controlPanel from "./endpoints/control_panel.js";
import verification from "./endpoints/verification.js";
import miscellaneous from "./endpoints/miscellaneous.js";
import applePay from "./endpoints/apple_pay.js";
import charge from "./endpoints/charge.js";
import dedicatedVirtualAccounts from "./endpoints/dedicated_virtual_accounts.js";
import disputes from "./endpoints/disputes.js";
import paymentPages from "./endpoints/payment_pages.js";
import subAccounts from "./endpoints/sub_accounts.js";

// define all existing resources here
const resources = {
  subAccounts,
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
  transferRecipients,
  transfers,
  bulkcharge,
  controlPanel,
  verification,
  miscellaneous,
  applePay,
  dedicatedVirtualAccounts,
  disputes,
  paymentPages,
};

export default resources;
