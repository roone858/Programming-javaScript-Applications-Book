var userProto = {
  name: "",
  email: "",
  alias: "",
  showInSearch: true,
  colorScheme: "light",
};
function createUser(user = {}) {
  return {
    name: user.name || userProto.name,
    name: user.email || userProto.email,
    alias: user.alias || userProto.alias,
    showInSearch: user.showInSearch,
    colorScheme: user.colorScheme || userProto.colorScheme,
  };
}

var newUser = createUser({
  name: "Mike",
  showInSearch: false,
  email: "www@gmail.com",
});

console.log(newUser);

function sortArg() {
  var args = [].slice.call(arguments, 0);
  return args.sort();
}

console.log(sortArg("a", "d", "c", "b"));

function morph(options) {
  var args = [].slice.call(arguments, 0),
    animals = "turtles"; // Set a default
  if (typeof options === "string") {
    animals = options;
    args.shift();
  }
  return "The pet store has " + args + " " + animals + ".";
}
console.log(morph("Dogs", 4));

////////////////////////////////////

var methods = {
    init: function (args) {
      return "initializing...";
    },
    hello: function (args) {
      return "Hello, " + args;
    },
    goodbye: function (args) {
      return "Goodbye, cruel " + args;
    },
  },
  greet = function greet(options) {
    var args = [].slice.call(arguments, 0),
      initialized = false,
      action = "init"; // init will run by default
    if (typeof options === "string" && typeof methods[options] === "function") {
      action = options;
      args.shift();
    }

    return methods[action](args);
  };

  console.log(greet("hello","mahmoud"))
