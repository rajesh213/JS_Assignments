function compoundInterst(principal,rate,time,numOfYrs)
{
	return principal*(math.pow((1+(rate/numberOfYears)),numOfYrs*time));
}

console.log(compoundInterst(100,3,4,5));
