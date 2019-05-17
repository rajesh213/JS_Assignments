var mark = {
  fullName: "mark",
  mass: 100,
  height: 2,
  bmi: function() {
    return this.mass / (this.height * this.height);
  }
};

var john = {
  fullName: "john",
  mass: 90,
  height: 5,
  bmi: function() {
    return this.mass / (this.height * this.height);
  }
};



mark.mass = 80;
mark.height = 5;
var markBmi = mark.bmi();

john.mass = 70;
john.height = 6;
var johnBmi = john.bmi();

if (markBmi > johnBmi)
  console.log(mark.fullName + " has the highestBmi and value is " + markBmi);
else
  console.log(john.fullName + " has the highestBmi and value is " + johnBmi);