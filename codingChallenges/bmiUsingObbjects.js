var mark = {
  fullName: mark,
  mass: 100,
  height: 2,
  bmi: function() {
    return this.mass / this.height * this.height
  }
};

var john = {
  fullName: john,
  mass: 60,
  height: 5,
  bmi: function() {
    return this.mass / this.height * this.height
  }
};



mark.mass = 50;
mark.height = 5;
var result1 = mark.bmi();

john.mass = 50;
john.height = 2;
var result2 = john.bmi();


console.log(result1, result2);