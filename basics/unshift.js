const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// unshift()  adds one or more elements to the beginning of array
const beforeUnShift = users.length
const addedUser = users.unshift({
  firstName: "Added",
  lastName: "User",
  jobTitle: "jobTitle",
  city: "city",
  zipCode: 111111,
  streetAddress: "streetAddress",
  country: "country",
  phoneNumber: 123456789,
  accountNumber: 122947834,
  currentBalance: 10000,
  routingNumber: 2489590828,
  company: "company",
})
const afterUnShift = users.length
console.log(" Added a User at index " + addedUser)
console.log("length before " + beforeUnShift + " length after " + afterUnShift)
