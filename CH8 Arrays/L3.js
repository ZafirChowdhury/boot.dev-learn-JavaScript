const uploadNewMessages = (oldMessages, newMessages) => {
    return [...oldMessages, ...newMessages];
};

console.log(uploadNewMessages(["Inconceivable!"], ["You keep using that word. I do not think it means what you think it means.",]));
console.log(uploadNewMessages([], ["Kaladin once soared with winds of change."]))
console.log(uploadNewMessages(["Winter is coming"], []));
