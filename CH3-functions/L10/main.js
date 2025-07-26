function getBillForMonth(bill, costPerSend, messagesSent) {
  return bill = costPerSend * messagesSent;
}

function monthlyBillIncrease(costPerSend, numLastMonth, numThisMonth) {
  let lastMonthBill;
  let thisMonthBill;
    
  lastMonthBill = getBillForMonth(lastMonthBill, costPerSend, numLastMonth);
  thisMonthBill = getBillForMonth(thisMonthBill, costPerSend, numThisMonth);

  return thisMonthBill - lastMonthBill;
}

// don't touch below this line

export { getBillForMonth, monthlyBillIncrease };
