var menu = [
    { id: 1, name: "Marguerite", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 }
];
var cashInRegister = 100;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
var nextOrderId = 1;
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
addNewPizza({ id: 5, name: "Chicken", price: 12 });
addNewPizza({ id: 6, name: "Extra cheese", price: 14 });
console.log("----------------");
console.log("Pizza details:", getPizzaDetail("chicken"));
console.log("----------------");
placeOrder("Marguerite");
placeOrder("Chicken");
placeOrder("Pepperoni");
console.log("----------------");
pizzaOrderComplete(2);
console.log("----------------");
console.log('Menu:', menu);
console.log("----------------");
console.log('Order queue:', orderQueue);
console.log("----------------");
console.log('Cash in register: $', cashInRegister);
