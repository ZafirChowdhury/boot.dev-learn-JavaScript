function createUserMap(users) {
    const userMap = new Map();
    for (const user of users) {
        userMap.set(`${user.fname} ${user.lname}`, user);
    };

    return userMap;
}

// users : [{fname, lname}]

console.log(createUserMap([
        { fname: "Peter", lname: "Parker", promotions: ["promoA"] },
        { fname: "Peter", lname: "Parker", promotions: ["promoB"] },
      ]));
