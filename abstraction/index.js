// create an abstraction that cleans up the setup within index.js
const faker = require("faker")
const { fa } = require("faker/lib/locales")

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

module.exports.makeFakeUsers = makeFakeUsers
