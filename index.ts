type Pizza = {
  id: number,
  name: string,
  price: number
}

type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed"
}

//? Utilities type
type updatedPizza = Partial<Pizza>

let cashInRegister =  100
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue: Order[] = []

const menu: Pizza[] = [
  {id: nextPizzaId++, name: "Marguerite", price: 8},
  {id: nextPizzaId++, name: "Pepperoni", price: 10},
  {id: nextPizzaId++, name: "Hawaiian", price: 10},
  {id: nextPizzaId++, name: "Veggie", price: 9}
]

//? Adding generic type
// function addToArray<T>(array: T[], item: T): T[] {
//   array.push(item)
//   return array
// }

// console.log(addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12}))
// addToArray<Order>(orderQueue, {id: nextOrderId++, pizza: menu[2], status: 'completed'})


//? More utilities type
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza{
  const newPizza = {
    id: nextPizzaId++, 
    ...pizzaObj
  }
  menu.push(newPizza)
  return newPizza
}

//! type: Order | undefined  // if we expect to return undefined values and we have not manage errors in our code

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

//? Narrowing Type
function getPizzaDetail(identifier: string | number): Pizza {
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

function updatePizza(id: number, updates: updatedPizza): Pizza {
  const updatedPizza = menu.find(pizzaObj => pizzaObj.id == id)
  if (!updatedPizza) throw new Error("Cannot find the pizza")
  Object.assign(updatedPizza, updates)

return updatedPizza
}


// addNewPizza({ name: "Chicken", price: 12 })
// addNewPizza({ name: "Extra cheese", price: 14 })
// console.log("----------------")
// console.log("Pizza details:", getPizzaDetail("chicken"))
// console.log("----------------")
// placeOrder("Marguerite")
// placeOrder("Chicken")
// placeOrder("Pepperoni")
// console.log("----------------")
// pizzaOrderComplete(2)
// pizzaOrderComplete(3)
// updatePizza(2, { price: 9 })
// console.log("----------------")
// console.log('Menu:',menu)
// console.log("----------------")
// console.log('Order queue:',orderQueue)
// console.log("----------------")
// console.log('Cash in register: $',cashInRegister)



