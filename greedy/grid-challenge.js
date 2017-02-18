function grid( items,number )
{
  
  for(var i=0 ;i<5;i++)
    {
      for( var j=1;j<5;j++)
        {
 
    while( j>0 && items[i][j].toString().charCodeAt() < items[i][j-1].toString().charCodeAt()  )
      {
        var temp =items[i][j];
        items[i][j]=items[i][j-1];
        items[i][j-1]=temp ;
        
      j=j-1;
    
      }
        
        }
      
    }
  return items;
}


var items=[
    [ "e", "b","a","c","d" ],
    [ "f","g","h","i","j" ],
    [ "o","l","m","k","n" ],
    [ "t","r","p","q","s" ],
    [ "x","y","w","u","v" ]
  
  ];


console.log( grid( items,5) );
