function sumOfNumbrs(limit)
{
	var start=1,sum=0;
	while(start<=limit)
	{
		sum=sum+start;
		start++;
	}
	return sum;
}

console.log(sumOfNumbrs(5));