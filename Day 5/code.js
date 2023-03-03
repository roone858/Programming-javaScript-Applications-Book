var switchProto = {
    isOn: function isOn() {
      return this.state;
    },
    toggle: function toggle() {
      this.state = !this.state;
      return this;
    },
    state: false,
  },
  switch1 = Object.create(switchProto),
  switch2 = Object.create(switchProto);
switch1.state = true;
console.log(switch1.isOn());
console.log(switch2.isOn());