var k = [1, 4, 3, 5];
var v = false; 
for(var i = 0; i < k.length; i++){
 for (var j = 0; j < k.length; j++) {
   if(k[i] == k[j]){
   }else if(k[i] + k[j] == 8){
       var v = true;
   }else{
   }   
 }
}
if( v == true){
    console.log(true);
}else{
    console.log(false);
}

