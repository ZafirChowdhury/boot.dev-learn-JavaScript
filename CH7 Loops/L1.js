function bulkSendCost(numMessages) {
    let cost = 0;
    let costPerMessage = 0.00;
    for (let i = 0; i < numMessages; i++) {
        cost = cost + 1.00 + costPerMessage;
        costPerMessage += 0.01;
    }

    return cost;
}

console.log(bulkSendCost(10));
console.log(bulkSendCost(20));
console.log(bulkSendCost(0));
console.log(bulkSendCost(1));
console.log(bulkSendCost(5));
console.log(bulkSendCost(30));
