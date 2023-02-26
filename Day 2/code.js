const user = {
  firstName: "Mahmoud",
  lastName: "Gamal",
  getName(a, b, c) {
    return this.firstName + " " + this.lastName + "" + a + b + c;
  },
};
console.log(user.getName());

const moderator = {
  firstName: "Ali",
  lastName: "Mohamed",
};
console.log(user.getName.call(moderator,1,2,3));
console.log(user.getName.apply(moderator,[1,2,3]));
const bindFun=user.getName.bind(moderator) //Bind return function 
console.log(bindFun("BIND",2,3));
