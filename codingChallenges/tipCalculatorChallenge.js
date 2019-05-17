var bills =[124,48,268];

var tips =[],finalPaidAmount=[],index=0;
var tips=tipCalculator(bills);

while(index<bills.length)
{
	finalPaidAmount.push(bills[index]+tips[index]);
    index++;
}
console.log(tips);
console.log(finalPaidAmount);









s


function tipCalculator(bills)
{
	var length=bills.length,index=0,tips=[];
	while(index<length)
	{
		if(bills[index]<50)
          tips.push(bills[index]*20/100);
        else if(bills[index]>=50 && bills[index]<=200)
        	tips.push(bills[index]*15/100);
        else
        	tips.push(bills[index]*10/100);
        index++;
	}
	return tips;
}