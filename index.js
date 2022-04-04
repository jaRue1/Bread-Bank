const faker = require("faker")
const { fa } = require("faker/lib/locales")

// Lets make some fake users

function makeFakeUsers() {
  let fakeUsers = []
  for (let i = 0; i < 100; i++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let jobTitle = faker.name.jobTitle()
    let phoneNumber = faker.phone.phoneNumber()
    let accountNumber = faker.finance.account(12) // give a random 12 digit account #
    let balance = Number(faker.finance.amount(100, 1000000, 2))
    if (i <= 20) {
      const routingNumber = 111111111
      const company = "Tech A"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
      })
    } else if (i >= 21 && i <= 50) {
      const routingNumber = 222222222
      const company = "Tech B"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
      })
    } else if (i >= 51 && i <= 70) {
      const routingNumber = 333333333
      const company = "Tech C"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
      })
    } else if (i >= 71 && i <= 99) {
      // from ids 71-99 444444444 routing number
      const routingNumber = 444444444
      const company = "Tech D"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        company: company,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
      })
    }
  }
  return fakeUsers
}
let users = makeFakeUsers() // this becomes array of 100 objects

console.log("All Users !!")
console.log(users)

// BASICS - The following tasks have been given below to help you get
// familiar with JS built in array methods. Try to solve these problems with the
// corresponding array methods.

// .find() a user that has an id that matches the your birthday date i.e (21)

// .map() all of the users and output just their firstNames

// .filter() out all users with an id greater than 30 but less 45 (31 to 44)

// .forEach() user in company TECH B print out there names in Alphabetical Order

// .sort() this array alphabetically

// SALES DEPT - This is

// get the top 5 earners in company Tech A and Tech B

// shift

// unshift()

// pop()

// reduce()
