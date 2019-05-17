function evenSeries(start,end)
{

	return (start%2)?series(++start,end):series(start,end);
}

function series(start,end)
{
	while(start<=end)
	{
		console.log(start);
		start+=2;
	}
}




console.log(evenSeries(5,10));

module.exports=evenSeries;
