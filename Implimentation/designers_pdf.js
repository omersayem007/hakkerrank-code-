function pdf(array,str)
{
  var alphabet ={};
  var fuck=[];
  var foo=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  for(var index=0 ;index<array.length ;index++)
   {
alphabet[foo[index]]=array[index];
   }
  
  for(var index =0 ;index<str.length ; index++)
    {
       fuck.push ( alphabet[str.split("")[index]] ) ;
        
    }
    
  return str.length * Math.max(...fuck) ;
 
}

console.log(pdf([1 ,3, 1,3, 1, 4, 1, 3 ,2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,5],"abc"));