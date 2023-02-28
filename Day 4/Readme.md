## Functional Programming :
- Functional programming is a style of programming that uses higher-order functions (a opposed to objects and data) to facilitate code organization and reuse.
- A higher order function treats functions as data
- either taking a function as an argument or returning a function as a result.
- Higher order functions are commonly used in JavaScript for a variety of purposes. Here are a few examples:

For example, imagine you have to sort two lists of items by price, but one is a list of concerts 

where the price is called `ticketPrice`
and another is a list of books where the price is just `price`.

``` javascript
var shows = [
    {
      artist: "Kreap",
      city: "Melbourne",
      ticketPrice: "40",
    },
    {
      artist: "DJ EQ",
      city: "Paris",
      ticketPrice: "38",
    },
    {
      artist: "Treasure Fingers",
      city: "London",
      ticketPrice: "60",
    },
  ],
  books = [
    {
      title: "How to DJ Proper",
      price: "18",
    },
    {
      title: "Music Marketing for Dummies",
      price: "26",
    },
    {
      title: "Turntablism for Beginners",
      price: "15",
    },
  ];
```

Instead, you could pass in a function to handle the comparison for the sort:

```javascript
var sortedShows = shows.sort(function (a, b) {
 return a.ticketPrice < b.ticketPrice;
 })

var sortedBooks = books.sort(function (a, b) {
 return a.price < b.price;
 });

```



<hr>
you don’t even have to think about writing a for loop. You frequently see a pattern like this repeated in most code:
```javascript
 var i, length = books.length;

 for (i = 0; i < length; i++) {
 books[i].category = 'music';
 }
```

The most basic of the array iterators is .forEach(). You simply write the function that you’ll use to process the list:
```javascript
 books.forEach(function (book) {
 book.category = 'music';
 });
 
```

## Stateless Functions (aka Pure Functions)
- Pure functions are stateless. This means that they do not use or modify variables, objects, or arrays that were defined outside the function
- stateless functions will always return the same output. Stateless functions won’t break if you call them at different times.
```javascript
var rotate = function rotate(arr) {
 arr.push(arr.shift());
 return arr;
}
```

## Asynchronous Operations

Asynchronous operations are operations that happen outside the **linear flow of program execution**
- Normally, the JavaScript engine will execute code line by line, in order from top to bottom
  
Asynchronous operations are broken up into two phases:
- call and response
-  it’s impossible to know at what point in the program flow you’ll be when you receive an asynchronous response

There are a couple of popular ways to manage that uncertainty.
1. callbacks
2. Promise

### Callback
Callbacks are functions that you pass as arguments to be invoked when the callee has finished its job
-  Callbacks are commonly passed into event handlers, Ajax requests, and timers

Callbacks work great when you’re only waiting for one operation at a time, or when you only have one job to do when the response comes back

###Promise 

- if you need to manage multiple asynchronous dependencies or you have several unrelated tasks waiting on the same data (such as a provider authorization)? That’s where promises can be very useful
  1. Promises are objects that allow you to add callback functions to success or failure queues.
  2.  Instead of calling a callback function in response to the completion of an asynchronous (or synchronous) operation
  3. you return a promise, which allows you to register any number of callbacks

The promise provides access to the state of the operation: whether it’s waiting or finished

and in some cases, what the progress is. You can add callbacks to a promise at any time,

which will trigger after the operation is complete and the promise is resolved.

If the promise has already resolved, the callback will be invoked immediately.
``` javascript
var multiply = function multiply(x, y) {
 return x * y;
 },
 partial = function partial(fn) {

 var args = [].slice.call(arguments, 1);

 return function() {
 var combinedArgs = args.concat(
 [].slice.call(arguments));
 return fn.apply(this, combinedArgs);
 };
 },
 double = partial(multiply, 2);

```

