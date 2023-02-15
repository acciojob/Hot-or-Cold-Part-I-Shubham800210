var randomNum:
var input;

function randomGen(){
	randomNum = Math.floor(Math.random() * 41)-20;
	document.getElementById("num").innerText = randomNum;
	guessNum();
	print();
}

function guessNum(){
	input = Number(document.getElementById("guess").value);
	
}
function print() {
	if(Math.abs(randomNum - input)<=5){
		document.getElementById("respond").innertext = "Hot";
	}
	else{
		document.getElementById("respond").innerHtml = "cold";
	}
}