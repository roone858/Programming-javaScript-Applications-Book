function Car(color, direction, mph) {
  this.color = color || "pink";
  this.direction = direction || 0; // 0 = Straight ahead
  this.mph = mph || 0;
  this.gas = function gas(amount) {
    amount = amount || 10;
    this.mph += amount;
    return this;
  };
  this.brake = function brake(amount) {
    amount = amount || 10;
    this.mph = this.mph - amount < 0 ? 0 : this.mph - amount;
    return this;
  };
}
var myCar = new Car("red");
console.log(myCar.gas().mph)
