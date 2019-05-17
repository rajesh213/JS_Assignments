function factorial(number)
{
  return (number>=0)?fact(number):undefined;
}


function fact(number)
{
  fact=1;
  while(number)
  {
    fact*=number;
    number--;
  }
  return fact;
}

console.log("factorial(5) is should be 120 and output as",factorial(5));

module.exports=factorial;
