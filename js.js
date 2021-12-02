 var y = Math.floor(Math.random() * 100 + 1);
var guess = 1;
document.getElementById("BADRO1").onclick = function(){
          
var x = document.getElementById("BADRO2").value;
  
   if(x == y)
   {    
       document.getElementById("message").innerHTML = "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
       + guess + " GUESS ";
   }
   else if(x > y)
   {    
       guess++;
       document.getElementById("message").innerHTML = "OOPS SORRY!! TRY A SMALLER NUMBER "
   }
   else
   {
       guess++;
       document.getElementById("message").innerHTML = "OOPS SORRY!! TRY A GREATER NUMBER "
   }
   if(guess==10){
    document.getElementById("message").innerHTML = "KHSSAAAARTI "
   }R
}