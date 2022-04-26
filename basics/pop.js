const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects
console.log(users)

// pop() removes last element of an array aka array.length - 1

const beforePop = users.length
const poppedUser = users.pop()
const afterPop = users.length

console.log(" Removed User at index 0" + poppedUser)
console.log("length before " + beforePop + "length after " + afterPop)
