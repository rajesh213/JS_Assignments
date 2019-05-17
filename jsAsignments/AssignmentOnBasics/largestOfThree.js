function largeOfThree(number1,number2,number3)
{
	return largest(number1,largest(number2,number3));
}


function largest(firstnumber,secondnumber)
{
	return (firstnumber>secondnumber)?firstnumber:secondnumber;
}




console.log(largeOfThree(10,5,90));