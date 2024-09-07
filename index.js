var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var orderQueue = [];
var menu = [
    { id: nextPizzaId++, name: "Marguerite", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 }
];
function addNewPizza(pizzaObj) {
    var newPizza = __assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
//! type: Order | undefined  // if we expect to return undefined values and we have not manage errors in our code
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza)
        throw new Error("This ".concat(pizzaName, " does not exist in the menu"));
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered"
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function pizzaOrderComplete(orderId) {
    var orderCompleted = orderQueue.find(function (order) { return order.id === orderId; });
    if (!orderCompleted)
        throw new Error("Does not exist an order with this id: ".concat(orderId));
    orderCompleted.status = "completed";
    return orderCompleted;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        if (identifier.length == 0)
            throw new Error("The parameter cannot be an empty string");
        var pizzaDetail = menu.find(function (pizzaObj) { return pizzaObj.name.toLocaleLowerCase() === identifier.toLocaleLowerCase(); });
        if (!pizzaDetail)
            throw new Error("This pizza: ".concat(identifier, " does not exist"));
        return pizzaDetail;
    }
    else if (typeof identifier === "number") {
        var pizzaDetail = menu.find(function (pizzaObj) { return pizzaObj.id === identifier; });
        if (!pizzaDetail)
            throw new Error("This pizza: ".concat(identifier, " does not exist"));
        return pizzaDetail;
    }
    else
        throw new TypeError("The parameter must be either a number or a string");
}
function updatePizza(id, updates) {
    var updatedPizza = menu.find(function (pizzaObj) { return pizzaObj.id == id; });
    if (!updatedPizza)
        throw new Error("Cannot find the pizza");
    Object.assign(updatedPizza, updates);
    return updatedPizza;
}
addNewPizza({ name: "Chicken", price: 12 });
addNewPizza({ name: "Extra cheese", price: 14 });
// console.log("----------------")
// console.log("Pizza details:", getPizzaDetail("chicken"))
// console.log("----------------")
// placeOrder("Marguerite")
// placeOrder("Chicken")
// placeOrder("Pepperoni")
// console.log("----------------")
// pizzaOrderComplete(2)
// pizzaOrderComplete(3)
updatePizza(2, { price: 9 });
console.log("----------------");
console.log('Menu:', menu);
console.log("----------------");
// console.log('Order queue:',orderQueue)
// console.log("----------------")
// console.log('Cash in register: $',cashInRegister)
