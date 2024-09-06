// Challenge: finish the object type definition
var person = {
    name: "Jose",
    age: 27,
    isStudent: true,
    address: {
        street: "Sarmiento st",
        city: "San Juan",
        country: "Argentina"
    }
};
var person2 = {
    name: "Sophia",
    age: 18,
    isStudent: false,
};
function returnObject(n) {
    var object = {
        number: n,
        addition: n + 5,
        subtraction: n - 5,
        multiplication: n * 5
    };
    console.log(object);
    return object;
}
var people = [person, person2]; // Array<Person> another way to define type
// returnObject(4)
// console.log("--------------")
// console.log(person)
// console.log("--------------")
// console.log(person2)
var userId = 1;
var users = [
    {
        id: userId++,
        username: "AlExml2",
        role: "admin"
    },
    {
        id: userId++,
        username: "SteveRogers1824",
        role: "member"
    },
    {
        id: userId++,
        username: "Choracus",
        role: "guest"
    }
];
var car = {
    model: "Ford Mustang",
    horsePower: 620,
    year: 2015
};
console.log(Object.values(car));
function getUser(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user)
        throw new Error("This username ".concat(username, " does not exist"));
    return user;
}
// getUser("Choracus")
function updateUser(id, updates) {
    var userToUpdate = users.find(function (user) { return user.id == id; });
    if (!userToUpdate)
        throw new Error("The user does not exist");
    Object.assign(userToUpdate, updates);
    return userToUpdate;
}
console.log(users);
console.log("------------");
console.log(updateUser(2, { role: "guest" }));
console.log("------------");
console.log(users);
