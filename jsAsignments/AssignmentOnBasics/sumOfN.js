function sumOfNumbrs(start,limit)
{
	var sum=0;
	while(start<=limit)
	{
		sum+=start;
		start++;
	}
	return sum;
}

console.log(sumOfNumbrs(10,15));