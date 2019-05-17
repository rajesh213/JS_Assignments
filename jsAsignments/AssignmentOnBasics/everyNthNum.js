function nthNum(begin,end,wanted)
{

	while(begin<=end)
	{
		if(begin%wanted==0)
			console.log(++begin);
		begin++;
	}
}



console.log(nthNum(1,100,7));

module.exports=nthNum;
