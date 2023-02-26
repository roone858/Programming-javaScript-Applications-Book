#### function expression :
assigns a function body to the variable This implementation is called a function expression.

``` javascript
var bar = function () {
 return arguments.callee;
};

  ```

#### Method literals :
 Methods are functions attached to objects.
``` javascript
var lightBulbAPI = {
 toggle: function () {},
 getState: function () {},
 off: function () {},
 on: function () {},
 blink: function () {}
 };

  ```
#### Lambdas Function :
The .addTo() function passed into .forEach() is a lambda
.forEach() method is one of several functional enumerators added to JavaScript in the ECMAScript 5 specification
```javascript

[5, 5, 5].forEach(function addTo(number) { result += number; });
```

Not all lambdas are closures, and not all closures are lambdas.
- **A closure** is created when a function references data that is contained outside the function scope. A lambda is a function that is used as a value (assigned to a variable or passed between
functions). Some languages support lambdas but do not support closures.

- Higher-order functions are functions that consume or return functions as data.
- Lambdas get passed to and/or returned from higher order functions, 
- and a function might be both a lambda and a higher order function
-  but not all higher order functions are lambdas.
-  **If a function is used as an argument or return value, it’s a lambda.**

#### Immediately Invoked Function Expressions :
```javascript
(function(name) {
   console.log(name) // Code that runs in your function
})("ahmed") // self invoking function
```
Immediately Invoked Function Expression (IIFE). 
This technique is often used to create a new scope to encapsulate modules. 
- jQuery uses IIFEs to isolate its variables from the global scope.
-  Before the IIFE became popular, acommon technique was to assign names to the **object prototype**




#### method context : 
Method context refers to the way the `this` keyword behaves inside a function.
- It is different in JavaScript than in other languages. As we are going to demonstrate here, the value of this is determined by how and where a function is called.
- By extension, if a function is defined in the global scope.
-  `this` will be set to window (global object) when the code is executed in the browser.
```javascript
var defaultLogger = {
  loggerName: "Default",
  log: function log(message) {
    console.log("[" + this.loggerName + "] " + message);
  }
};

defaultLogger.log("example 1"); // logs "[Default] example 1"
```
  Functions are invoked by appending parentheses to the end of the function reference.
- For these examples, we’ll use a slightly altered highPass() function:
```javascript
function highPass(number, cutoff) {
 cutoff = cutoff || this.cutoff;
 return (number >= cutoff);
}
var filter1 = {
 highPass: highPass,
 cutoff: 5
 },
 filter2 = {
 // No highPass here!
 cutoff: 3
 };

```
To clarify, the .call() method shared by all functions allows you to call any method or function on any object. In other words, it sets this inside the method to refer to the
object of your choosing. The signature is:
`someMethod.call(context, argument1, argument2, ...);`
Here, context is the object you want this to refer to. If you need to pass an array of
arguments, use .apply() instead:
`someMethod.apply(context, someArray);`

#### Function.prototype.bind()
The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

```