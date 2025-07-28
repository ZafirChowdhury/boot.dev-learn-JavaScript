const getMostRecentUser = (usernames) => {
    const lastUsername = usernames[usernames.length - 1];

    return lastUsername ? lastUsername : null;
};

console.log(getMostRecentUser(["Frodo", "Gandalf", "Legolas"]));
console.log(getMostRecentUser(["DoomGuy", "MasterChief", "Geralt"]));
console.log(getMostRecentUser(["Sephiroth"]));
console.log(getMostRecentUser([]));
