function fixUserMap(brokenMap) {
    const fixedMap = new Map();

    for (const [key, value] of brokenMap) {
        fixedMap.set(`${key.fname} ${key.lname}`, value);
    }

    return fixedMap;
}

// {{key}, {}} 
// map[0] -> key map[1] -> {}
// {key}, {}

const grossMap = new Map([
        [
          { fname: "Mikasa", lname: "Ackerman" },
          { fname: "Mikasa", lname: "Ackerman", tags: ["Titan Slayer"] },
        ],
        [
          { fname: "Mikasa", lname: "Ackerman" },
          { fname: "Mikasa", lname: "Ackerman", tags: ["Scout Regiment"] },
        ],
      ]);

const fixedMap = fixUserMap(grossMap);
console.log(fixedMap);
