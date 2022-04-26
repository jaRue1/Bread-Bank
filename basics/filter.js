const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// .filter() out all users with an id greater than 30 but less 45 (31 to 44)
