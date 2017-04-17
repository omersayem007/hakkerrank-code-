function birds(total_birds,birds_Id){
var start_Id ;
var max_Id=[];

for( let i=0  ;i<total_birds ;i++)
{
  max_Id[i]="";
}

for( var i=0 ;i<total_birds ;i++)
{
  
   start_Id =birds_Id[i];
 var counter=0;
 if( max_Id[start_Id] !== 0)
 {
    for( var j=0 ; j<total_birds ;j++ )
      {
        
          if( start_Id == birds_Id[j] )
              {
                 counter++;
              }
      }
       max_Id[start_Id]=counter;
 }
}  

return   max_Id.indexOf( Math.max(...max_Id) ) ; 
}
console.log( birds(10,[1,4,4,4,5,5,5,5,5,3]) );
