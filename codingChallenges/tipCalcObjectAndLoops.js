var john = {
  bills: [124, 48, 268, 180, 42],
  finalAmount: [],
  tips: [],
  calc: function(x = this.bills) {
    var start = 1,
      y = this.tips,
      z = this.finalAmount;
    for (start = 0; start < x.length; start++) {
      if (x[start] < 50) {
        y.push(0.2 * x[start]);
        z.push(x[start] + 0.2 * x[start]);
      } else if (x[start] > 100 && x[start] < 200) {
        y.push(0.15 * x[start]);
        z.push(x[start] + 0.15 * x[start]);
      } else {
        y.push(0.1 * x[start]);
        z.push(x[start] + 0.1 * x[start]);
      }
    }
  }
};

john.calc();
console.log("The tips are " + john.tips);
console.log("The finalAmount is " + john.finalAmount);