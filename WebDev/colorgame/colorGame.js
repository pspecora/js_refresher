
var lvl = 6;
var colors = [];
var pickedColor;


var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");


init();


// initializes functions by setting up gameboard 
function init() {
	setupModeButtons();
	setupSquares();
	reset();
	}

// adds functionality to squares by adding click listeners to each
// also checks to see if the right square was clicked 
function setupSquares() {
	for(var i= 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		
		//compare color to pickedColor

		if (clickedColor === pickedColor){
			messageDisplay.textContent= "correct!";
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent= "wrong!";
		}

	});
}

}


// sets up mode difficulty for easy and hard mods 
function setupModeButtons(){
	console.log("setup");
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){

			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent == "Easy"){
				lvl=3;
				reset();
			}
			else{
				lvl=6;
				reset();
			}
		});
	}
}


resetButton.addEventListener("click", function(){
	reset();
});


// resets board by generating new colors array, picking new colors, updating visible colors and setting background color
function reset(){
	colors = generateRandomColors(lvl);

	//pick new random colors 
	pickedColor = pickColor();

	//update visible colors
	colorDisplay.textContent = pickedColor;

	//loop through array and assign new colors
	for(var i= 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

	messageDisplay.textContent = "";
	resetButton.textContent = "New colors"



};

// sets the correct color to background 
function changeColor(colors){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = pickedColor;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

//pushes generated random colors into an array of colors 
function generateRandomColors(num){
	//make an array
	var arr = []

	for(i=0; i<num; i++){
		//get random color and push into line
		arr.push(randomColor())
	}
	//return that array
	return arr;


}

// generates one case of random color
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);	
	var RGB = "rgb(" + r +", "+ g +", "+ b +")";	
	return RGB;

}