var john = {
  bills: [128, 50, 268, 180, 42],
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



var mark = {
  bills: [124, 48, 270, 180, 50],
  finalAmount: [],
  tips: [],
  calc: function(x = this.bills) {
    var start,
      y = this.tips,
      z = this.finalAmount;
    for (start = 0; start < x.length; start++) {
      if (x[start] < 100) {
        y.push(0.2 * x[start]);
        z.push(x[start] + 0.2 * x[start]);
      } else if (x[start] > 100 && x[start] < 300) {
        y.push(0.1 * x[start]);
        z.push(x[start] + 0.15 * x[start]);
      } else {
        y.push(0.1 * x[start]);
        z.push(x[start] + 0.25 * x[start]);
      }
    }
  },
  avg: function(x = this.tips) {
    var start, sum = 0,
      average;
    for (start = 0; start < x.length; start++) {
      sum += x[start];
    }
    avg = sum / x.length;
    return avg;
  }
};

john.calc();
console.log("john tips are " + john.tips);
console.log("john finalAmount is " + john.finalAmount);
console.log("john average tip is " + mark.avg(john.tips));
mark.calc();
console.log("mark tips are " + mark.tips);
console.log("mark finalAmount is " + mark.finalAmount);
console.log("mark average tip is " + mark.avg());

if (mark.avg(john.tips) > mark.avg())
  console.log("john has paid highest avg tip");
else {
  console.log("mark has paid highest avg tip");
}