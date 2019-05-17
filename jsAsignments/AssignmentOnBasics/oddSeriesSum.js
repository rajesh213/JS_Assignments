function oddSeriesSum(start,end)
{
	
	return (start%2)?series(start,end):series(++start,end);
}



function series(start,end)
{
	var oddsum=0;
	while(start<=end)
	{
		oddsum+=start;
		start+=2;
	}
	return oddsum;
}




console.log(oddSeriesSum(5,10));