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
returnObject(4);
console.log("--------------");
console.log(person);
console.log("--------------");
console.log(person2);
var user = {
    username: "AlExml2",
    role: "admin"
};
var car = {
    model: "Ford Mustang",
    horsePower: 620,
    year: 2015
};
