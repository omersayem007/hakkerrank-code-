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
  
     var array=[];
     var sum=0;
for(var j=0 ;j<obj.length;j++)
{
  if(obj[j].importance === 1)
  {
    array.push(obj[j].luck);
    }
}
var sorted=[];
sorted=array.sort();
for(var k=0;k<imp ; k++)
{
  sum+=sorted[k]; 
}

return sum;

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
 


/*obj.sort(function(a,b)
{
  return b.luck-a.luck ; 
});*/

console.log( luck_balance(array) );
