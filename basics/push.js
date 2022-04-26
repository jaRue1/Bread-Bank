const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects

// note push and unshift return the new length of the array they are used on.

// push adds one or more elements to the end of an array
const beforePush = users.length
const pushedUser = users.push(
  {
    firstName: "Pushed",
    lastName: "User",
    jobTitle: "push it",
    city: "city",
    zipCode: 11234,
    streetAddress: "push street",
    country: "country",
    phoneNumber: 1234567889,
    accountNumber: 1229470834,
    currentBalance: 10000980,
    routingNumber: 1238498409,
    company: "company",
  },
  {
    firstName: "Pushed2",
    lastName: "User2",
    jobTitle: "push2 it",
    city: "city",
    zipCode: 11234,
    streetAddress: "push street2",
    country: "country",
    phoneNumber: 1234567889,
    accountNumber: 1229470834,
    currentBalance: 10000980,
    routingNumber: 1238498409,
    company: "company",
  }
)
const afterPush = users.length

console.log(" Removed User at index 0" + pushedUser)
console.log("length before " + beforePush + "length after " + afterPush)
