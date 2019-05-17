function oddSeries(number)
{
	return (number%2)?series(number):series(--number);
}

function series(number)
{
	while(number>=1)
	{
		console.log(number)
		number-=2;
	}
}

console.log(oddSeries(10));
