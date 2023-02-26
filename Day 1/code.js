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
console.log(worker.name);
////////////////////
test("Order WITH unintentional side effect.", function () {
  var cartProto = {
      items: [],
      addItem: function addItem(item) {
        this.items.push(item);
      },
    },
    createCart = function (items) {
      var cart = Object.create(cartProto);
      cart.items = items;
      return cart;
    },
    // Load cart with stored items.
    savedCart = createCart(["apple", "pear", "orange"]),
    session = {
      get: function get() {
        return this.cart;
      },
      // Grab the saved cart.
      cart: createCart(savedCart.items),
    };
  // addItem gets triggered by an event handler somewhere:
  session.cart.addItem("grapefruit");
  ok(
    session.cart.items.indexOf("grapefruit") !== -1,
    "Passes: Session cart has grapefruit."
  );
  ok(
    savedCart.items.indexOf("grapefruit") === -1,
    "Fails: The stored cart is unchanged."
  );
});
