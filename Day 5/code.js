function factory() {
  var highlander = {
    name: "MacLeod",
  };

  return {
    get: function get() {
      return highlander;
    },
  };
}

var singleton = factory(),
  hero = singleton.get(),
  hero2 = singleton.get();

hero.sword = "Katana";

console.log(hero);
console.log(hero2);
