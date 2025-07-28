function getCleanRank(reviewWords) {
    let badWordCount = 0;
    for (const word of reviewWords) {
        if (word === "dang" || word === "shoot" || word === "heck") {
            badWordCount++;
        }
    }

    if (badWordCount === 1) {
        return "dirty";
    }

    if (badWordCount >= 2) {
        return "filthy";
    }

    return "clean";
}

console.log(getCleanRank(["avril", "lavigne", "has", "best", "dang", "tour"]));
console.log(getCleanRank(["what", "a", "bad", "film"]));
console.log(getCleanRank(["oh", "my", "heck", "I", "hated", "it"]));
console.log(getCleanRank(["ripoff"]));
console.log(getCleanRank(["That", "was", "a", "pleasure"]));
console.log(getCleanRank(["shoot!", "I", "cant", "say", "I", "liked", "the", "dang", "thing"]));
console.log(getCleanRank(["shoot", "dang", "heck"]));
