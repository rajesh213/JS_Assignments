var johnScore1=10;	
var johnScore2=11;
var johnScore3=12;


var markScore1=20;
var markScore2=21;
var markScore3=22;


var maryScore1=30;
var maryScore2=31;
var maryScore3=32;

var averageOfJohn=(johnScore1+johnScore2+johnScore3)/3;
var averageOfMark=(markScore1+markScore2+markScore3)/3;
var averageOfMary=(maryScore1+maryScore2+maryScore3)/3;

if(averageOfJohn<averageOfMark && averageOfMary<averageOfMark ) {
	console.log('The high scorer is mark and its avearge is'+averageOfMark);
}else if(averageOfJohn>averageOfMark && averageOfJohn>averageOfMary){
	console.log('The high scorer is john and its avearge is'+averageOfJohn);
}else if(averageOfJohn<averageOfMary && averageOfMark<averageOfMary){
	console.log('The high scorer is john and its avearge is'+averageOfMary);
}else {
	console.log('Match was draw');

}





