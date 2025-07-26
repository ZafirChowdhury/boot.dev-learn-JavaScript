const campaign = {
  name: "Welcome Campaign",
  maxMessages: 100,
  sentMessages: 30,
  sendMessage: () => {
    campaign.sentMessages++;
  },
};

campaign.sendMessage();
console.log(campaign.sentMessages);