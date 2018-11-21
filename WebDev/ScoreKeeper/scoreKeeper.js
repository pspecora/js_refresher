
var gameOver = false;
var winningScore = 5;


var scoreP1 = 0;
var buttonP1 = document.querySelector("#P1");
var displayP1 = document.querySelector("#scoreP1");

var scoreP2 = 0;
var buttonP2 = document.querySelector("#P2");
var displayP2 = document.querySelector("#scoreP2");

var resetbutton = document.getElementById("reset");

var numInput = document.querySelector("input");
var playScore = document.querySelector("#playToScore")

console.log(playScore)
numInput.addEventListener("change", function(){
	winningScore = Number(numInput.value);
	playScore.textContent = winningScore;
	reset();

})

buttonP1.addEventListener("click", function(){
	if(!gameOver){
	scoreP1++;
	displayP1.textContent = scoreP1;
		if(scoreP1 === winningScore){
			displayP1.classList.add("winner")
			gameOver = true;
		}
	}


})

buttonP2.addEventListener("click", function(){
	if(!gameOver){
	scoreP2++;
	displayP2.textContent = scoreP2;
		if(scoreP2 === winningScore){
			displayP2.classList.add("winner")
			gameOver = true;
			}
	}
})
resetbutton.addEventListener("click", function(){
	reset();
})

function reset(){
	scoreP1 = 0;
	scoreP2 = 0;
	displayP1.textContent = scoreP1;
	displayP2.textContent = scoreP2;
	displayP1.classList.remove("winner");
	displayP2.classList.remove("winner");
	gameOver= false;
	}
