function productOfNumbrs(start,limit)
{
	var product=1;
	while(start<=limit)
	{
		product*=start;
		start++;
	}
	return product;
}

console.log(productOfNumbrs(2,5));