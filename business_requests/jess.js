const userFactory = require("../abstraction/index");
const users = userFactory.makeFakeUsers(); // this becomes array of 100 objects

// Hey bud , could you get me the average balance of users in company Tech C
const company = "Tech C";
// get all users in tech C
const employees = users.filter((user) => {
  if (user.company === company) {
    return user;
  }
});

let sum = 0;
const count = employees.length;

// sum up all the account balances
employees.forEach((employee) => {
  sum = employee.currentBalance + sum;
});

const avg = sum / count;

console.log("The Total Sum " + Math.trunc(sum));
console.log("The count is " + count);
console.log("Average Account Balance " + Math.trunc(avg));
