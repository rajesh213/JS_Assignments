function fact(number)
{
	var fact=1;
	while(number)
	{
		fact *= number;
		number--;
	}
	return fact;
}

console.log(fact(5));