var multiply = function multiply(x, y) {
    return x * y;
  },
  partial = function partial(fn) {
    var args = [].slice.call(arguments, 1);

    return () => {
      var combinedArgs = args.concat([].slice.call(arguments));
      return fn.apply(this, combinedArgs);
    };
  },
  double = partial(multiply, 2);
  console.log(double(Number(4)))
