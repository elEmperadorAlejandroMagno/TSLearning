type Pizza = {
  id: number
  name: string,
  price: number
}

type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed"
}

const menu: Pizza[] = [
  {id: 1, name: "Marguerite", price: 8},
  {id: 2, name: "Pepperoni", price: 10},
  {id: 3, name: "Hawaiian", price: 10},
  {id: 4, name: "Veggie", price: 9}
]
let cashInRegister =  100
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza): void {
  menu.push(pizzaObj)
}

let nextOrderId = 1;

function placeOrder(pizzaName: string): Order {
  let selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if (!selectedPizza) throw new Error(`This ${pizzaName} does not exist in the menu`)
  cashInRegister += selectedPizza.price
  
  let newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered"
  }
  orderQueue.push(newOrder)

return newOrder
}

function pizzaOrderComplete (orderId: number): Order {
  let orderCompleted = orderQueue.find(order => order.id === orderId)
  if (!orderCompleted) throw new Error(`Does not exist an order with this id: ${orderId}`)
  orderCompleted.status = "completed"

return orderCompleted
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    if (identifier.length == 0) throw new Error("The parameter cannot be an empty string")
      const pizzaDetail = menu.find(pizzaObj => pizzaObj.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
      if (!pizzaDetail) throw new Error(`This pizza: ${identifier} does not exist`)

    return pizzaDetail
    } else if (typeof identifier === "number") {
      const pizzaDetail = menu.find( pizzaObj=> pizzaObj.id === identifier)
      if (!pizzaDetail) throw new Error(`This pizza: ${identifier} does not exist`)

    return pizzaDetail
    } else throw new TypeError("The parameter must be either a number or a string") 
}



addNewPizza({id: 5, name: "Chicken", price: 12})
addNewPizza({id: 6, name: "Extra cheese", price: 14})
console.log("----------------")
console.log("Pizza details:", getPizzaDetail("chicken"))
console.log("----------------")
placeOrder("Marguerite")
placeOrder("Chicken")
placeOrder("Pepperoni")
console.log("----------------")
pizzaOrderComplete(2)
pizzaOrderComplete(3)
console.log("----------------")
console.log('Menu:',menu)
console.log("----------------")
console.log('Order queue:',orderQueue)
console.log("----------------")
console.log('Cash in register: $',cashInRegister)


