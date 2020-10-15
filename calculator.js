
var myNumber = document.getElementsByClassName("bot"),
    mScreen =  document.getElementById("screen"),
    myDelete =  document.getElementById("delete"),
    myClose =  document.getElementById("close"),
    myEqual =  document.getElementById("eq"),
    i  = 0;


for (var i = 0; i < myNumber.length; i++) {
	

  myNumber[i].onclick = function (){


     document.getElementById("screen").value   += this.value ;
 }

}
 
myDelete.onclick  = function dellete(){

	mScreen.value = "";
}




myClose.onclick = function(){

	mScreen.value = mScreen.value.slice(0,mScreen.value.length-1)
}




myEqual.onclick = function (){

    if(mScreen.value === ""){

       mScreen.placeholder = "write number";


     }else {

       
     	mScreen.value = eval(mScreen.value);
     }	

}

document.onkeydown = function(event) {

	 "use strict";

	 var i = event.keyCode,
         
         x = String.fromCharCode(i) ;

     
     if(mScreen.value === ""){

       mScreen.placeholder = "write number";


     }else if (i === 187){

        
     	mScreen.value = eval(mScreen.value);

     }
    
}















                        


	






















