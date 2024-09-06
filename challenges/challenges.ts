// Challenge: finish the object type definition

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  address?: Address
}

type Address = {
  street: string,
  city: string,
  country: string
}

type User = {
  username: string,
  role: UserRole,
}

type UserRole = "guest" | "member" | "admin"


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


returnObject(4)
console.log("--------------")
console.log(person)
console.log("--------------")
console.log(person2)

let users: User[] = [
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
]

let car: {model: string, horsePower: number, year: number} = {
  model: "Ford Mustang",
  horsePower: 620,
  year: 2015
}

function getUser(username: string): User {
  const user = users.find(user => user.username === username)
  if (!user) throw new Error(`This username ${username} does not exist`)
  return user
}

getUser("")