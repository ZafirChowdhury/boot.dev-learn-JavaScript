class Message {
    static numOfMessage = 0;
    static totalLenOfAllMessage = 0;

    constructor(recipient, sender, body) {
        this.recipient = recipient;
        this.sender = sender;
        this.body = body;

        Message.numOfMessage++;
        Message.totalLenOfAllMessage += body.length;
    }

    static getAverageMessageLength() {
        let average = Message.totalLenOfAllMessage / Message.numOfMessage;
        return Math.round(average * 100) / 100;
    }
}
