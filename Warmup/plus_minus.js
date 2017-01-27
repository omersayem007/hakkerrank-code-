function plusminus(array)
{
 var plus=[];
 var minus=[];
 var zero=[];
  var result=[];


for(var index =1;index<array[0];index++)
{

	if(Math.sign(array[index]) === 1)
	{
		plus.push(array[index]);
	} 
	else if(Math.sign(array[index]) === -1 )
	{
		minus.push(array[index]);
	}
	else
    {
    	zero.push(array[index]);
    }
	
}

   result.push( plus.length/array[0]);
   result.push( minus.length/array[0]);
   result.push( zero.length/array[0]);


   return result ;
}


console.log(plusminus([4,-3,-2,1,0]));