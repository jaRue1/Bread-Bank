const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// shift -- removes element at index 0 aka first element
const beforeShift = users.length
const removedUser = users.shift()
const afterShift = users.length

console.log(" Removed User at index 0" + removedUser)
console.log("length before " + beforeShift + "length after " + afterShift)
