function birds(total_birds,birds_Id){
var start_Id ;
var max_Id=[];
var counter=0;

for( var  i=0 ; i<2 ;i++ )
{
  start_Id =birds_Id[i];
 
    for( var j=0 ; j<total_birds ;j++ )
      {
          if( start_Id == birds_Id[j] )
              {
                 counter++;
              }
      }
   max_Id[start_Id]=counter;
}
return  max_Id ; 
}
console.log( birds(6,[1,4,4,4,5,3]) );
