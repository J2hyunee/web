/**
 * 
 */

function view(str) {
 var obj = document.getElementById(str);

 if (obj.style.display=="")
  obj.style.display="none";
 else
  obj.style.display="";
}