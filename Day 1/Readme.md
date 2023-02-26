For a long time, there was no way to save data with JavaScript. If you wanted data to
persist, you had to submit a form to a web server and wait for a page refresh.
That hindered the process of creating responsive and dynamic web applications. However

Just-in-time compiling: in modern browsers, most JavaScript is compiled, highly 
optimized, and executed like native code, so runtime performance is close to that of software
written in C or C++.
JavaScript apps are event driven and non blockings

JavaScript has very rich object-oriented (OO) features. The JSON (JavaScript Object Notation) 

JavaScript uses a prototypal inheritance model. Instead of classes, you have object pro‐
totypes. New objects automatically inherit methods and attributes of their parent object
through the prototype chain. It’s possible to modify an object’s prototype at any time,
making JavaScript a very flexible, dynamic language
``` javascript
let company = {
    name: "A",
    pay: function () {
      console.log("Paying");
    },
  }; //company object
  let worker = {
    id: 1,
    work: function () {
      console.log("Working");
    },
  }; //worker object
  worker.__proto__ = company; //worker object inherits company object
  console.log(worker);

  worker.pay(); // calling method from company object using worker object.
  worker.work();
 console.log(worker.name) ;
  ```
### callback function 
is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

**Here is a quick example:**
```javascript

function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

```
##### Code example: synchronous callback :
```javascript
const arr = [1, 2, 3]
const doubler = x => x * 2
const doubled = arr.map(doubler)

```
Here we pass the function doubler to the map method. map does not do anything in the background, and the function we pass is therefore also classified as a synchronous callback. But the syntax of asynchronous and synchronous callbacks is identical. Whether the function is used in an asynchronous or synchronous manner depends on the function or method it's passed to.

##### Code example: asynchronous callback :
```javascript
const addButton = document.querySelector("#add")
addButton.addEventListener("click", () => {
  console.log("You clicked #addButton")
})
```
The addEventListener method attaches an event handler to a DOM element. The details of this method is not important here; all we need to know is that the second parameter is treated as an asynchronous callback function which is only executed when the particular event is triggered on the target node. So, in this case, the async callback function is called every time we click on the #add element.

##### higher order functions 
functions that take other functions as parameters, return a function, or both.
```javascript
// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);
```