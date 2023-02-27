function highPass(number, cutoff) {
  cutoff = cutoff || this.cutoff;
  return number >= cutoff;
}
var filter1 = {
    highPass: highPass,
    cutoff: 5,
  },
  filter2 = {
    // No highPass here!
    cutoff: 3,
  };

console.log(filter1.highPass(3, 4));
console.log(filter1.highPass(4, 4));
console.log(filter1.highPass(5, 4));
var defaultLogger = {
  loggerName: "Default",
  log: function log(message) {
    console.log("[" + this.loggerName + "] " + message);
  },
};

defaultLogger.log("example 1"); // logs "[Default] example 1"
const user = {
  firstName: "Mahmoud",
  lastName: "Gamal",
  getName(a, b, c) {
    return this.firstName + " " + this.lastName + "" + a + b + c;
  },
};

const moderator = {
  firstName: "Ali",
  lastName: "Mohamed",
};
console.log(user.getName.call(moderator, 1, 2, 3));
console.log(user.getName.apply(user, [1, 2, 3]));
const bindFun = user.getName.bind(moderator); //Bind return function
console.log(bindFun("BIND", 2, 3));
