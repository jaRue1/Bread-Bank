const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// some() check if users in company D have balance greater than 10,000 $

const techDUsers = users.filter((user) => {
  if (user.company === "Tech D") {
    return user
  }
})
const test = () => {}
const output = techDUsers.some(test)

console.log(output)
