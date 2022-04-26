const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// .filter() out all users with an id greater than 30 but less 45 (31 to 44)
let chosenFakeUsers = users.filter((user) => {
  if (user.id > 30 && user.id < 45) {
    return user
  }
})
console.log("The Chosen 15")
console.log(chosenFakeUsers)
