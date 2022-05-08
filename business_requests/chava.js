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
// console.log("Company A Top Earners", company1);
// console.log("Company B Top Earners", company2);

// display data -- last name, job title, address, and phone number
