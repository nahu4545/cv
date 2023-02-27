/*----------------------
navbar 
-----------------------*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbarNav").style.padding = "20px 7px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbarNav").style.padding = "10px 7px";
    document.getElementById("logo").style.fontSize = "20px";
  }
}

/*----------------------------
Informacion
-----------------------------*/
function evento() {
  

}

