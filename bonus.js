let createCounter = function (init) {
  if (init >= -1000 && init <= 1000) {
    const counter = {
      number: init,
      callCount: 0,
      increment: function () {
        if (this.callCount < 1000) {
          this.number += 1;
          this.callCount += 1;
          return this.number;
        } else {
          return "max calls reached.";
        }
      },
      decrement: function () {
        if (this.callCount < 1000) {
          this.number -= 1;
          this.callCount += 1;
          return this.number;
        } else {
          return "max calls reached.";
        }
      },
      reset: function () {
        if (this.callCount < 1000) {
          this.number = init;
          this.callCount += 1;
          return init;
        } else {
          return "max calls reached.";
        }
      },
    };

    return counter;
  } else {
    console.log("value must be between -1000 and 1000.");
  }
};

let counter = createCounter(2);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
