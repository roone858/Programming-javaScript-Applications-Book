# Day 3

- [Day 3](#day-3)
  - [Function Scope :](#function-scope-)
  - [Hoisting :](#hoisting-)
  - [Closures :](#closures-)
  - [Method Design:](#method-design)
  - [Named Parameters :](#named-parameters-)
  - [Function Polymorphism](#function-polymorphism)
  - [Method dispatch :](#method-dispatch-)

---

## Function Scope :
- Variable scope is the section of code in which the identifier refers to the expected value
- block scope, meaning that you can create
blocks arbitrarily to contain variables
- The var keyword is not block scoped. This is a
common source of confusion among people who are new to JavaScript but familiar with
other languages.
- var uses function scope instead. Block scope will be available using the let keyword in
ES6. It is already implemented in several browsers, but it may be some time before you
can safely use it if you need wide cross-browser support

## Hoisting :

Hoisting is the word most commonly used to describe the illusion that all variable declarations are “hoisted” to the top of the containing function. **Technically, that’s not exactly how it happens, but the effect is the same**

JavaScript builds its execution environment in two passes :
1. The **declaration pass** sets up the runtime environment, where it scans for all variable and function declarations and creates the identifiers.
2. The second pass is **the execution pass**. After the first pass, all declared functions are available, but variables are still undefined. Consider this code:
``` javascript
var x = 1;
(function () {
  console.log(x);
  var x = 2;
  console.log(x);
})();

console.log(x);
```
```
undefined
2
1
```
if you need to change value of x delete `var` before x in function 
``` javascript
var x = 1;
(function () {
  console.log(x);
   x = 2;
  console.log(x);
})();

console.log(x);
```
```
1
2
2
```
## Closures :
- In a nutshell, a closure stores function state, even after the function has returned
  1.  To create a closure, simply define a function inside another function and expose it
  2.  To expose a function, return it or pass it to another function
  3.  The inner function will have access to the variables declared in the outer function
- This technique is commonly used to give objects data privacy.
```javascript
var o = function o () {
 var data = 1,
 get;
 get = function get() {
 return data;
 };
 return {
 get: get
 };
};
var obj = o(); // Get an object with the .get() method.
```
In this example, o is an object factory that defines the private variable data and a priv‐
ileged method, .get(), that has access to it
- a privileged method is an exposed method that has access to private data. 
- you can’t get at the data except through its privileged methods
  
closures are an essential ingredient in languages that support first-class functions, because they give you access to outer scope variables from inside your lambdas


## Method Design:
- JavaScript supports named parameter lists, function polymorphism, method chaining, and lambda expressions.
- You should be familiar with all of these techniques so that you can choose the right tool for the job
- keep in mind when you design your methods. This bears repeating:
  1.  Keep It Simple, Stupid (KISS)
  2.  Do One Thing (DOT), and do it well
  3.  Don’t Repeat Yourself (DRY)

 
## Named Parameters : 
- The number of variables you pass into a function is called its arity. Generally speaking, function arity should be kept small
- The trouble with a large arity is that each parameter must be passed into the function in the right order

This example is designed to set up a new user account. Each user account has some
default settings that get honored unless an override value is passed in:
```javascript
var userProto = {
 name: '',
 email: '',
 alias: '',
 showInSearch: true,
 colorScheme: 'light'
 };
function createUser(name, email, alias, showInSearch,
 colorScheme) {
 return {
 name: name || userProto.name,
 name: email || userProto.email,
 alias: alias || userProto.alias,
 showInSearch: showInSearch,
 colorScheme: colorScheme || userProto.colorScheme
 };
}
```
```javascript
var newUser = createUser('Tonya', '', '', '', 'dark');
```
it’s impossible to know what the second, third, or fourth parameter is without looking at the createUser() implementation. It’s also impossible to set the last parameter without passing in values for all parameters

**Here is a better alternative:**
```javascript
var userProto = {
  name: "",
  email: "",
  alias: "",
  showInSearch: true,
  colorScheme: "light",
};
function createUser(user={}) {
  return {
    name: user.name || userProto.name,
    name: user.email || userProto.email,
    alias: user.alias || userProto.alias,
    showInSearch: user.showInSearch,
    colorScheme: user.colorScheme || userProto.colorScheme,
  };
}


var newUser = createUser({
 name: 'Mike',
 showInSearch: false
});
```
## Function Polymorphism
Polymorphic functions behave differently based on the parameters you pass into them.
In JavaScript, those parameters are stored in the array-like arguments object, but it’s missing useful array methods
- You can borrow the .slice() method from the Array prototype using a technique called method delegation. You delegate the .slice() call to the Array.prototype object.
-  The method call looks like this:
```javascript
function sortArg() {
  var args = [].slice.call(arguments, 0);
 return args.sort() 
};
console.log(sortArg('a','d','c','b'))
```
```
[ 'a', 'b', 'c', 'd' ]
```
Slice starts at index 0 and returns everything from that index on as a new array. 
<hr>
Polymorphic functions frequently need to examine the first argument in order to decide
how to respond. Now that args is a real array, you can use the .shift() method to get
the first argument:

Now you can branch if a string is passed as the first parameter:
```javascript
function morph(options) {
  var args = [].slice.call(arguments, 0),
  animals = 'turtles'; // Set a default
  if (typeof options === 'string') {
  animals = options;
  args.shift();
  }
  return('The pet store has ' + args + ' ' + animals + '.');
 }
 console.log(morph("Dogs",4))
```
```
The pet store has 4 Dogs.
```
## Method dispatch :
Method dispatch is the mechanism that determines what to do when an object receives a message.
  1. JavaScript does this by checking to see if the method exists on the object. If it doesn’t
  2. the JavaScript engine checks the prototype object
  3. If the method isn’t there, it checks the prototype’s prototype, and so on
  4. When it finds a matching method, it calls the method and passes the parameters in.

Dynamic dispatch enables polymorphism by selecting the appropriate method to run based on the parameters
```javascript
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

  console.log(greet("hello","Mahmoud"))
```
```
Hello, Mahmoud
```
[def]: #day-3