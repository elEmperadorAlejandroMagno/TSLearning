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
  id: number,
  username: string,
  role: UserRole,
}

type UserRole = "guest" | "member" | "admin"

type updatedUser = Partial<User>


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

console.log(users)
console.log("------------")
updateUser(2, { role: "guest" })
console.log("------------")
console.log(addNewUser({username: "Lechero", role: "guest"}))
console.log(users)
