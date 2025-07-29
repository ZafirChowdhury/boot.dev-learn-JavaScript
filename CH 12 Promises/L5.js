function updateMessageStatus(messageId, currentStatus, isDelivered) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (currentStatus === "Sending" && isDelivered) {
            resolve(`Textio Message ${messageId} has been delivered successfully.`)
        }

        if (currentStatus === "Sending" && !isDelivered) {
            reject(`Textio Message ${messageId} is still sending and cannot be marked as delivered.`)
        }

        resolve(`Textio Message ${messageId} status updated to ${currentStatus}.`)
    }, 2000);
  });
}

let messageStatusPromise =  updateMessageStatus("M123", "Q", true);
messageStatusPromise
    .then( 
        (message) => {
    console.log("Executing on sub tread");
    console.log(message)
    })

    .catch(
        (message) => {
    console.log("Executing on sub tread");
    console.log(message)
    });

let test = await messageStatusPromise;
console.log(test);

console.log("Main tread exucution ended");
