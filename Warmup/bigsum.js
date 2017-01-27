function bigsum( array)
{
	var sum =0;

 for( var index =1;index<=array[0];index++)
 {
    sum+=array[index];   
 }

 return sum;


}


console.log( bigsum([2,100000000001,100000000002]) );