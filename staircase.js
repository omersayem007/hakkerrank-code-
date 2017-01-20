function staircase(number)
{

	var star="";
    for(var index =1; index<=number;index++)
    {
    	for(var index1=number-1;index1>0;index1--)
    {
      for(var index2=index1 ; index2>0;index2--)
      {
         star+="<br>";
      }

      for(var index3=index;index3>0;index3--)
      {
         	star+="*";	
      }
      
      star+="/n";

  }

    }

     return star;
}

console.log(staircase(4));