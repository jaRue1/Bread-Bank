const userFactory = require("../abstraction/index");
const users = userFactory.makeFakeUsers(); // this becomes array of 100 objects

// SALES DEPT - Chava from sales needs to know somethings before a meeting see if you can help him out.

// Hey bud , could you get me the top 5 earners in company Tech A and company Tech B
// ps - I just need their last name, job title, address, and phone number
function getTopEarnersInCompany(users, company) {
  return [...users]
    .filter((user) => user.company === company)
    .sort((a, b) => {
      if (a.currentBalance < b.currentBalance) return -1;
      if (a.currentBalance > b.currentBalance) return 1;
      return 0;
    })
    .slice(-5); // slice()
}
// find top earners within users array
const company1 = getTopEarnersInCompany(users, "Tech A");
const company2 = getTopEarnersInCompany(users, "Tech B");

// display data -- last name, job title, address, and phone number
if (company1.length !== 0) {
  console.log(company1.length + " users found in " + company1[0].company + "!");
  for (const user of company1) {
    console.log("-------------------------");
    console.log("last name : " + user.lastName);
    console.log("job title : " + user.jobTitle);
    console.log("street address : " + user.streetAddress);
    console.log("phone number : " + user.phoneNumber);
    console.log("-------------------------");
  }
}
console.log("");
console.log("");
console.log("");
console.log("");

if (company2.length !== 0) {
  console.log(company2.length + " users found in " + company2[0].company + "!");
  for (const user of company2) {
    console.log("-------------------------");
    console.log("last name : " + user.lastName);
    console.log("job title : " + user.jobTitle);
    console.log("street address : " + user.streetAddress);
    console.log("phone number : " + user.phoneNumber);
    console.log("-------------------------");
  }
}
