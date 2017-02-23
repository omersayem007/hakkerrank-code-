function max_triangle(array)
{
  var arr=[];
  var n=3 ;
  
  for(var i=0 ; i<(array.length-2) ;i++ )
  {
   for(var j=i ;j<n ;j++)
   {
    arr.push(array[j]);
   }
   n++;
  }
 
 return arr ;
  
}


console.log( max_triangle([1 ,1, 1,3]) );
