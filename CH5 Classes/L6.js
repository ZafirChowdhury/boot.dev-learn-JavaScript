class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }

  formatMessage(message) {
    return `To: ${this.recipient}, Message: ${message}`;
  }
}

// don't touch above this line

class SMSSender extends Sender {
    formatMessage(message) {
        return `${super.formatMessage(message)} [SMS]`;
    }
}

class EmailSender extends Sender {
    formatMessage(message) {
        return `${super.formatMessage(message)} [Email]`;
    }
}

// Test
const sms = new SMSSender("SMS Man");
console.log(sms.formatMessage("Hello I am SMS man."))

const email = new EmailSender("Email Man");
console.log(email.formatMessage("Hello I am Email man."))
