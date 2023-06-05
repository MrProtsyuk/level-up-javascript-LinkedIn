// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Mark", 
  [password]: "Mark",
  age: 16
};

console.log(user.username);
console.log(user.password);