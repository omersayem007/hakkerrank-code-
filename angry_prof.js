function angry_prof(number,student_list_1,student1,student_list_2,student2)
{
  var text=" ";
  var min_1=student_list_1[1];
  var min_2=student_list_2[1];
  
  
  var student_on_time1 =student1.filter((student)=>student<=0);
  var student_on_time2 =student2.filter((student)=>student<=0);
  
  for(var i=1 ;i<=number ;i++)
    {
        if(student_on_time.length>=min_+i])
    {
      text+="No\r";
    }
  else
    text+="Yes\r";
      
    }
   
  
  return text;
   
}


console.log(angry_prof(2,[4,3],[-1, -3, 4, 2,],[4 ,2],[0 ,-1 ,2 ,1]));