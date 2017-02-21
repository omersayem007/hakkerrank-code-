function luck_balance(obj)
{
  return obj ;
}

function data(luck,importance)
{
  this.luck=luck;
  this.importance=importance;
}

var obj=[
  
  new data(5,1),
  new data(1,2)
];

console.log(luck_balance( obj ));
