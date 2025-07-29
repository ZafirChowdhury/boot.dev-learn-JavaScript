function createMessage(phoneNumber, message) {
    const phoneMessage = {
        phoneNumber: phoneNumber,
        message: message,
        messageLength: message.length,
    };

    return phoneMessage;
}