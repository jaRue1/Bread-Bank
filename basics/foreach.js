const userFactory = require("../abstraction/index")
const users = userFactory.makeFakeUsers() // this becomes array of 100 objects
console.log(users)

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
