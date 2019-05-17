function fibonnaci(number)
{
	var firstNum=start=0,secondNum=1,thirdNum;
	while(start<=number)
	{
        console.log(firstNum);
        thirdNum=firstNum+secondNum;
        firstNum=secondNum;
        secondNum=thirdNum;
        start++;
	}
}

console.log(fibonnaci(9));

module.exports=fibonnaci;
