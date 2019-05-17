function evenSeries(number)
{
	return (number%2)?series(--number):series(number);
}

function series(number)
{
	while(number)
	{
		console.log(number)
		number-=2;
	}
}

console.log(evenSeries(11));
