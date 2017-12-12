var numSquares=6;


var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var msgDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var pickedColor=pickColor();


for(var i=0;i<modeButtons.length;i++){

		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy"){
				numSquares=3;
			}
			else{
				numSquares=6;
			}
			reset();
		});

}


function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColors());
	}
	return arr;
}
function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

for(var i=0;i<squares.length;i++){

	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){

			var clickedColor=this.style.background;
			// console.log(pickedColor,clickedColor);
			if(clickedColor===pickedColor){

					changeColors(clickedColor);
					msgDisplay.textContent="Correct";
					h1.style.background=this.style.background;
					resetButton.textContent="Try Again.!"

			}
			else{
					msgDisplay.textContent="Try Again!";
					this.style.background="#232323";
			}


	});

}
function changeColors(clr){
	for(var i=0;i<squares.length;i++){

		squares[i].style.background=clr;
	}
}
function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
colorDisplay.textContent=pickedColor;	

resetButton.addEventListener("click",function(){
	reset();
});
function reset(){
	msgDisplay.textContent="";
	h1.style.background="steelblue";
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";

	for (var i=0;i<squares.length;i++){

		if(colors[i]){

			squares[i].style.display="block";
			squares[i].style.background=colors[i];

		}else{
			squares[i].style.display="none";
		}
	}
}