var markHeight = prompt('Enter the height of mark in meters');
var markMass   = prompt('Enter the weight of mark in kgs');
var johnHeight = prompt('Enter the height of john in meters');
var johnMass   = prompt('Enter the weight of john in kgs');

var markBmi = markMass/(markHeight*markHeight);
var johnBmi = johnMass/(johnHeight*johnHeight);

var highestBmi = markBmi>johnBmi;

console.log('Is mark BMI Higher than Johns BMI ?'+' '+highestBmi);