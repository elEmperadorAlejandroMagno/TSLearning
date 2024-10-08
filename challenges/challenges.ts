// Challenge: finish the object type definition

//? INTERSECTION TYPE &
type Person = PersonBasicInfo & AdditionalInfo

type AdditionalInfo = {
  isStudent: boolean,
  address?: Address
}

type Address = {
  street: string,
  city: string,
  country: string
}

type User = {
  id: number,
  username: string,
  role: UserRole,
}

//? UNION TYPE |
type UserRole = "guest" | "member" | "admin"

type updatedUser = Partial<User>

type PersonBasicInfo = {
  name: string,
  age: number,
}

let person: Person = {
  name: "Jose",
  age: 27,
  isStudent: true,
  address: {
    street: "Sarmiento st",
    city: "San Juan",
    country: "Argentina"
  }
}

let person2: Person = {
  name: "Sophia",
  age: 18,
  isStudent: false,
}

function returnObject(n: number): object {
  let object: { number: number, addition: number, subtraction: number, multiplication: number} = {
    number: n,
    addition: n + 5,
    subtraction: n - 5,
    multiplication: n * 5
  }
  console.log(object)
  return object
}

let people: Person[] = [person, person2] // Array<Person> another way to define type


// returnObject(4)
// console.log("--------------")
// console.log(person)
// console.log("--------------")
// console.log(person2)

let userId = 1

let users: User[] = [
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
]

let car: {model: string, horsePower: number, year: number} = {
  model: "Ford Mustang",
  horsePower: 620,
  year: 2015
}

console.log(Object.values(car))

function getUser(username: string): User {
  const user = users.find(user => user.username === username)
  if (!user) throw new Error(`This username ${username} does not exist`)

return user
}

// getUser("Choracus")

function updateUser(id: number, updates: updatedUser): User {
  let userToUpdate = users.find(user => user.id == id)
  if (!userToUpdate) throw new Error("The user does not exist")
  Object.assign(userToUpdate, updates)

return userToUpdate
}

function addNewUser(newUser: Omit<User, "id">): User {
  let user = { 
    id: userId++, 
    ...newUser
  }
  users.push(user)

return user
}

// console.log(users)
// console.log("------------")
// updateUser(2, { role: "guest" })
// console.log("------------")
// console.log(addNewUser({username: "Lechero", role: "guest"}))
// console.log(users)

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper on kettles", "warm woolen mittens"]
const voters = [{ name: "Alice", age: 42 }, {  name:"Bob", age: 23 }]


//? <> Generic can be any name
function getLastItem<T>(array: T[]): T {
  return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))


//? Define a type from a value with typeof
const address = {
  planet: 'Mart',
  city: 'Madrid'
}

type AddressLiving = typeof address

const addressTwitch: AddressLiving = {
  planet: 'Venus',
  city: 'Barcelona'
}

//? define a type from the return value of a function

function createPlanet() {
  return {
    planet: 'Jupiter',
    color: 'light brown'
  }
}

type PlanetInfo = ReturnType<typeof createPlanet>

//? TUPLES 

type CellValue = "X" | "" | "O"

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]

]

const gameBoard = [
  ["X", "X", ""],
  ["O", "X", ""],
  ["O", "O", "X"]
]