function getMaxMessagesToSend(costMultiplier, maxCostInPennies) {
    let actualCostInPennies = 1.0;
    let maxMessagesToSend = 1;
    let balance = maxCostInPennies - actualCostInPennies;
    
    while (balance > 0) {
        actualCostInPennies *= costMultiplier;
        balance -= actualCostInPennies;
        maxMessagesToSend++;
    }

    if (balance < 0) {
        maxMessagesToSend--;
    }

    return maxMessagesToSend;
}

console.log(getMaxMessagesToSend(1.1, 5));
console.log(getMaxMessagesToSend(1.3, 10));
console.log(getMaxMessagesToSend(1.35, 25));
