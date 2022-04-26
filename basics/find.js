const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// .find() a user that has an id that matches the your birthday date i.e (21)
let findFakeUser = users.find((user) => {
  return user.id === 21
})
console.log("User # 21 !")
console.log(findFakeUser)
