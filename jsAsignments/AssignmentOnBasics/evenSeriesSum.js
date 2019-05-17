function evenSeriesSum(start,end)
{
	
	return (start%2)?series(++start,end):series(start,end);
}



function series(start,end)
{
	var evensum=0;
	while(start<=end)
	{
		evensum+=start;
		start+=2;
	}
	return evensum;
}




console.log(evenSeriesSum(5,10));