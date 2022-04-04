const faker = require("faker")
const { fa } = require("faker/lib/locales")

// Lets make some fake users

function makeFakeUsers() {
  let fakeUsers = []
  for (let i = 0; i < 100; i++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let jobTitle = faker.name.jobTitle()
    let state = faker.address.state()
    let city = faker.address.city()
    let zipCode = faker.address.zipCode("#####")
    let streetAddress = faker.address.streetAddress(true)
    let country = faker.address.country()
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
        state: state,
        city: city,
        zipCode: zipCode,
        streetAddress: streetAddress,
        country: "USA",
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
        city: city,
        zipCode: zipCode,
        streetAddress: streetAddress,
        country: country,
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
        state: state,
        city: city,
        zipCode: zipCode,
        streetAddress: streetAddress,
        country: "USA",
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
      })
    } else if (i >= 71 && i <= 99) {
      const routingNumber = 444444444
      const company = "Tech D"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        city: city,
        zipCode: zipCode,
        streetAddress: streetAddress,
        country: country,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
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
let findFakeUser = users.find((user) => {
  return user.id === 21
})
console.log("User # 21 !")
console.log(findFakeUser)

/// .map() all of the users and output just their firstNames
let fakeUsersFirstNames = users.map((user) => {
  return user.firstName
})
console.log("All User First Names !!")
console.log(fakeUsersFirstNames)

// .filter() out all users with an id greater than 30 but less 45 (31 to 44)
let chosenFakeUsers = users.filter((user) => {
  if (user.id > 30 && user.id < 45) {
    return user
  }
})
console.log("The Chosen 15")
console.log(chosenFakeUsers)

// .forEach() user in company TECH B print out there names in Alphabetical Order
const companyUserNames = []
function getNames() {
  users.forEach((user) => {
    if (user.company == "Tech B")
      // push()
      companyUserNames.push(user.firstName + " " + user.lastName)
  })
}
getNames()
console.log("Tech B Names !!")

// .sort() this array alphabetically
companyUserNames.sort()
for (const iterator of companyUserNames) {
  console.log(iterator) // print out each name
}

// shift

// unshift()

// pop()

// reduce()

// SALES DEPT - Chava from sales needs to know somethings before a meeting see if you can help him out.

// Hey bud , could you get me the top 5 earners in company Tech A and company Tech B
// ps - I just need their last name, job title, address, and phone number
function getTopEarnersInCompany(users, company) {
  return [...users]
    .filter((user) => user.company === company)
    .sort((a, b) => {
      if (a.currentBalance < b.currentBalance) return -1
      if (a.currentBalance > b.currentBalance) return 1
      return 0
    })
    .slice(-5) // slice()
}
// find top earners within users array
const company1 = getTopEarnersInCompany(users, "Tech A")
const company2 = getTopEarnersInCompany(users, "Tech B")
console.log("Company A Top Earners", company1)
console.log("Company B Top Earners", company2)

// Hey bud , could you get me the average balance of users in company Tech C

// Hey bud, could you get me all of the users in companies Tech A and Tech D that have a balance over 50,000
// ps - I just need their last name, email and address
