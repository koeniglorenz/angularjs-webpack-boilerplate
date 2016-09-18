
module.exports = ctrl;

function ctrl() {
  var vm = this;

  vm.greeting = "Hello!";

  this.changegreeting = function(_greeting) {
    vm.greeting = _greeting;
  };
}
