//////////////////////////////////////////////////
//          jenral v                            //
/////////////////////////////////////////////////
var myNumber = document.getElementsByClassName("bot"),
    myNaN    = document.getElementsByClassName("nan"),
    mScreen =  document.getElementById("screen"),
    mCalc  =   document.getElementById("calc"); 

//////////////////////////////////////////////////
//          buttons and screen and calc         //
/////////////////////////////////////////////////

for (let i = 0; i < myNumber.length; i++) {

  myNumber[i].onclick = function (){
      
     mScreen.value  +=  this.value ;

      next = parseInt(mScreen.value[mScreen.value.length - 1]);

      last = mScreen.value[mScreen.value.length - 1];
  
      if(last=="*"||last=="+"||last == "-"||last== "/"||
        typeof(next) !== "number"){}
          
      else if(typeof(next) == "number"){
          
         mCalc.placeholder = eval(mScreen.value);   
      }
  }
}

//////////////////////////////////////////////////
//              delete and close               //
///////////////////////////////////////////////// 
let myDelete =  document.getElementById("delete"),
    myClose =  document.getElementById("close");

myDelete.onclick  = function dellete(){
	  mScreen.value = "";
    mCalc.placeholder = "";
}

myClose.onclick = function(){

  mScreen.value = mScreen.value.slice(0,mScreen.value.length-1);

  next = parseInt(mScreen.value[mScreen.value.length - 1]);

  last = mScreen.value[mScreen.value.length - 1];
  
  if(last=="*"||last=="+"||last == "-"||last== "/"||
    typeof(next) !== "number"){}

  else if(mScreen.value == "") {
    mCalc.placeholder = "";
  }   
  else if(typeof(next) == "number"){   
    mCalc.placeholder = eval(mScreen.value);      
    }   
}
//////////////////////////////////////////////////
//             equal  and enter                 //
///////////////////////////////////////////////// 
let myEqual =  document.getElementById("eq");

myEqual.onclick = function (){

  next = parseInt(mScreen.value[mScreen.value.length - 1]);
    if(mScreen.value === ""){}

    else {
      
     mCalc.style.transform = "rotatex(360deg)";
   
   //   mCalc.placeholder = ""; 
      mScreen.value = mCalc.placeholder;
     }   
}
//////////////////////////////////////////////////
//                 key bourd                   //
///////////////////////////////////////////////// 
mScreen.onkeyup = function(){

  if(mScreen.value == "") {
    mCalc.placeholder = "";
  }

  next = parseInt(mScreen.value[mScreen.value.length - 1]);
  last = mScreen.value[mScreen.value.length - 1];

  if(
  last=="+"||last=="-"||last=="*"||last=="/"|| 
  last=="1"||last=="2"||last=="3"||last=="4"||
  last=="5"||last=="6"||last=="7"||last=="8"|| 
  last=="9"||last=="="||last=="."
  ){
      if(last=="+"||last=="-"||last=="*"||last=="/"
      ||typeof(next) !== "number"){}
          
      else if(last=="="){
      mScreen.value[mScreen.value.length - 1]  = "";
      } 

      else if(typeof(next) == "number"){
      mCalc.placeholder = eval(mScreen.value);
      }
  }      
}
///////////////// key equal ////////////////////
document.onkeydown = function(event) {
	 "use strict";
	 let ev = event.keyCode;

  if(mScreen.value === ""){}

    else if (ev === 187){
    ev = myEqual.click();
    }  
}
//////////////////////////////////////////////////
//                  on and off                 //
/////////////////////////////////////////////////
let onOff = document.getElementById("on");

    onOff.onclick = function(){
    myDelete.click();

    mScreen.placeholder = "";

    mScreen.classList.toggle("off");
    mCalc.classList.toggle("off");

    for (i = 0; i < myNumber.length; i++) {
    
        myNumber[i].classList.toggle("disabled");
    }

    for (x = 0; x < myNaN.length; x++) {
    
      myNaN[x].classList.toggle("disabled");
  }    
}
//////////////////////////////////////////////////////
//    sin,cos,tan,pow2,pow3,sqart2,sqart3,int       //                                   //
//////////////////////////////////////////////////////
function sin(){
  myEqual.click();
	mScreen.value.value=Math.sin(mScreen.value);
}

function cos(){
  myEqual.click();
  mScreen.value=Math.cos(mScreen.value);
}

	function tan(){
    myEqual.click();
	  mScreen.value=Math.tan(mScreen.value);
	}
	function pow2(){
    myEqual.click();
	  mScreen.value = Math.pow(mScreen.value, 2);
	}

	function pow3(){
    myEqual.click();
	  mScreen.value.value = Math.pow(mScreen.value, 3);
	}

	function sqrt2(){
    myEqual.click();
	  mScreen.value=Math.sqrt(mScreen.value, 2);
	}

	function sqrt3(){
    myEqual.click();
	  mScreen.value=Math.sqrt(mScreen.value, 3);
	}
  function int(){
    myEqual.click();
	  mScreen.value=Math.round(mScreen.value);
    mCalc.placeholder=Math.round(mScreen.value);
	}
/////////////////////////////////////////////////////









                        


	






















