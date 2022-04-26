const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

/// .map() all of the users and output just their firstNames
let fakeUsersFirstNames = users.map((user) => {
  return user.firstName
})
console.log("All User First Names !!")
console.log(fakeUsersFirstNames)
