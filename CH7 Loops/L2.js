function maxMessagesWithinBudget(budget) {
    let maxMessage = 0;
    let costPerMessage = 0;
    budget = budget * 100;

    for (let i = 0; true; i++) {
        costPerMessage = Math.round(100 + (i * 1));
        if (budget < costPerMessage) {
            break;
        }

        budget = Math.round(budget - costPerMessage);
        maxMessage++;
    }

    return maxMessage;

}

console.log(maxMessagesWithinBudget(5.0));
console.log(maxMessagesWithinBudget(10.0));
console.log(maxMessagesWithinBudget(0.99));
console.log(maxMessagesWithinBudget(1.0));
console.log(maxMessagesWithinBudget(3.03));
console.log(maxMessagesWithinBudget(15.0));
