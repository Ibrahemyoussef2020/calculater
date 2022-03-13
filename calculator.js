//////////////////////////////////////////////////
//              buttons and screen             //
/////////////////////////////////////////////////
var myNumber = document.getElementsByClassName("bot"),
    mScreen =  document.getElementById("screen"),
    i  = 0;

for (var i = 0; i < myNumber.length; i++) {
  myNumber[i].onclick = function (){

     document.getElementById("screen").value   +=  this.value ;
  }

}
//////////////////////////////////////////////////
//              delete and close               //
///////////////////////////////////////////////// 
let myDelete =  document.getElementById("delete"),
    myClose =  document.getElementById("close");

myDelete.onclick  = function dellete(){
	  mScreen.value = "";
}

myClose.onclick = function(){

	mScreen.value = mScreen.value.slice(0,mScreen.value.length-1)
}
//////////////////////////////////////////////////
//             equal  and enter                 //
///////////////////////////////////////////////// 
let myEqual =  document.getElementById("eq");

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
//////////////////////////////////////////////////
//                  on and off                 //
/////////////////////////////////////////////////
let onOff = document.getElementById("on");

  onOff.onclick = function(){
    myDelete.click();

    mScreen.classList.toggle("off");

    for (i = 0; i < myNumber.length; i++) {
  
        myNumber[i].classList.toggle("disabled");
    }
    
}














                        


	






















