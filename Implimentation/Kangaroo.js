function Kangaroo( start1,speed1, start2, speed2 )
{
  var distance1;
  var distance2;
  distance1=start1+speed1;
  distance2=start2+speed2;
  
  for( ;; )
  {
        if( distance1 == distance2 )
         {
           return "yes";
           
         }
         distance1+=speed1;
         distance2+=speed2;
  }
  
 
}




console.log ( Kangaroo(0 ,2 ,5 ,3) );
