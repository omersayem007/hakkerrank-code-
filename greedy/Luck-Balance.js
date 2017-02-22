function luck_balance(obj , imp)
{
  var temp=0;
  
    if(imp===0)
      {
        for(var i=0 ;i<obj.length;i++)
          {
              temp+=obj[i].luck;
          }
      return temp ;
      }
  else
 
 
  obj.sort(function(a,b)
{
 
  return a.luck-b.luck ;
 
});

  var sum =0 ;
 var sum1 =0 ;
 var sum2 =0;

   for(var j=0;j<obj.length ;j++)
   {
      if( obj[j].importance === 1)
        {
          sum++;
        } 
   }
  
  for( var k =0 ;k<sum-imp ;k++)
{
  if(obj[k].importance === 1 )
  {
    sum1+=obj[k].luck;
    delete obj[k];
  
  }
}

for(var l=sum-imp; l<obj.length ; l++)
{
  sum2+=obj[l].luck ;
}


return sum2-sum1 ;

}

function data(luck,importance)
{
  this.luck=luck;
  this.importance=importance;
}

var obj=[
  
  new data(5,1),
  new data(2,1),
   new data(1,1),
  new data(8,1),
   new data(10,0),
  new data(5,0),
  
];
 

console.log( luck_balance(obj,2) );
