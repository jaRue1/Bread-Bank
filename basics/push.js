const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// note push and unshift return the new length of the array they are used on.

// push adds one or more elements to the end of an array
