var button = document.querySelector("button");
 

var background = document.querySelector("body")
var e = true;

button.addEventListener("click", function(){
if(e){
	background.style.background = "pink";
	e = false;
}
else{
	background.style.background = "white";
	e = true;
	}
	});