const campaign = {
  getRemainingMessages() {
    return this.maxMessages - this.sentMessages;
  },

  maxMessages: 100,
  sentMessages: 30,
  name: "Welcome Campaign",
};
