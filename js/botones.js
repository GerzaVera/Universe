window.addEventListener('load',function(){

    //selectores de tema

    var theme = this.document.querySelector("#theme");
    
   var toBlue = this.document.querySelector("#toBlue");
   var toBlack = this.document.querySelector("#toBlack");
   var toPurple = this.document.querySelector("#toPurple");

   toBlue.addEventListener('click', function(){
       theme.href = "css/blue.css";

    });

    toBlack.addEventListener('click', function(){
        theme.href = "css/black.css";
 
     });

     toPurple.addEventListener('click', function(){
        theme.href = "css/purple.css";
 
     });

       

    });


  

