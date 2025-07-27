const user = {
  name: "Default User",
  type: "user",
};

const adminUser = Object.create(user);
adminUser.type = "admin";

function isAdmin(obj) {
    if (Object.getPrototypeOf(obj) == adminUser) {
        return true;
    }

    return false;
}

console.log(isAdmin(Object.create(adminUser)));
console.log(isAdmin(Object.create(user)));
