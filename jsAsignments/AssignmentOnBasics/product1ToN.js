function productOfNumbrs(limit)
{
	var start=1,product=1;
	while(start<=limit)
	{
		product=product*start;
		start++;
	}
	return product;
}

console.log(productOfNumbrs(5));