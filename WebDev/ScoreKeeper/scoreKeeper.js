alert("connected");

var scoreP1 = 0;
var buttonP1 = document.querySelector("#P1")
var displayP1 = document.querySelector("#scoreP1")

var scoreP2 = 0;
var buttonP2 = document.querySelector("#P2")
var displayP2 = document.querySelector("#scoreP2")

console.log(displayP1);

buttonP1.addEventListener("click", function(){
	scoreP1++;
	displayP1.textContent = scoreP1;


})

buttonP2.addEventListener("click", function(){
	scoreP2++;
	displayP2.textContent = scoreP2;

})
