function getPrimaryAndBackupMessages(messages) {
    if (!messages) {
        return {primary: undefined, backups: []}; 
    }

    let [primary, ...backups] = messages;
    
    return {
        primary,
        backups
    } 
}

function getPrimaryAndBackupMessagesOneLiner(messages) {
    const [primary, ...backups] = messages;
    return {primary, backups};
};

console.log(getPrimaryAndBackupMessages([
        "Welcome to Textio!",
        "Your order has shipped",
        "Reminder: Payment due soon",
      ]));

console.log(getPrimaryAndBackupMessagesOneLiner([
        "Welcome to Textio!",
        "Your order has shipped",
        "Reminder: Payment due soon",
      ]));
