function multiplyTable(tableNumber,limit)
{
	var start=1;
	while(start<=limit)
	{
		console.log(tableNumber +"*"+ start +" = "+tableNumber*start);
		start++;
	}
	
}


console.log(multiplyTable(5,10));