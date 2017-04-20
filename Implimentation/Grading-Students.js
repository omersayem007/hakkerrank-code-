/*https://www.hackerrank.com/challenges/grading*/

function grading(marks){
  
  for( var  i=0 ;i<marks.length;i++)
  {
    if( marks[i]<38)
    {
      console.log(marks[i]);
      
    }
    else
    {
        var verifaion = marks[i]/5 ;
        var ceiled_verification=Math.ceil(verifaion)*5;
      
          if( ( ceiled_verification -marks[i] <3) )
              {
                console.log(marks[i]+( ceiled_verification -marks[i]) );  
              }
          else
             {
         console.log(marks[i]);
             }
             
    }
  } 
}


console.log( grading([73,67,38,33]) );
