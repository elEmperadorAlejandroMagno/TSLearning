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

// returnObject(4);
// console.log("--------------");
// console.log(person);
// console.log("--------------");
// console.log(person2);

var users = [
    {
        username: "AlExml2",
        role: "admin"
    },
    {
        username: "SteveRogers1824",
        role: "member"
    },
    {
        username: "Choracus",
        role: "guest"
    }
];
var car = {
    model: "Ford Mustang",
    horsePower: 620,
    year: 2015
};
function getUser(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user)
        throw new Error("This username ".concat(username, " does not exist"));
    return user;
}
// console.log(getUser('Choracus'));
