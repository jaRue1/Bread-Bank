const userFactory = require("../abstraction/index");
const users = userFactory.makeFakeUsers(); // this becomes array of 100 objects

// Hey bud, could you get me all of the users in companies Tech A and Tech D that have a balance over 900,000
// ps - I just need their last name, email and address

// get all the users from Tech A and Tech D
// then get all the users with balance over 50000
let output = users.filter((user) => {
  if (
    (user.company === "Tech A" || user.company === "Tech D") &&
    user.currentBalance > 900000
  ) {
    return user;
  }
});

// then display data --- last name, email and address
if (output.length === 0) {
  console.log("Sorry Bud there where no users found. ");
} else {
  console.log(output.length + " users found !");
  for (const user of output) {
    console.log("-------------------------");
    console.log("last name : " + user.lastName);
    console.log("email : " + user.email);
    console.log("street address : " + user.streetAddress);
    console.log("state : " + user.country);
    console.log("-------------------------");
  }
}
