const getCleanMessages = (messages, badWord) => {
    cleanMessaes = [];
    for (let message of messages) {
        if (!message.toLowerCase().includes(badWord.toLowerCase())) {
            cleanMessaes.push(message);
        }
    }
    
    return cleanMessaes;
}

console.log(getCleanMessages([
        "I am a man of constant sorrow",
        "I've seen trouble all my days",
        "Parched and dusty",
        "nuthin' a hot bath won't cure",
      ], "trouble"))
