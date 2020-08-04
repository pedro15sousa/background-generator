var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.createElement("button");
btn.appendChild(document.createTextNode("Get Random Color!"));
body.appendChild(btn);
btn.onclick = getRandomColor;

function getRandomColor() {
	c1 = 'rgb(' + String(randomIntFromInterval(0,1000)) + ', ' + String(randomIntFromInterval(0,1000)) + ', ' + String(randomIntFromInterval(0,1000)) + ')'; 
	c2 = 'rgb(' + String(randomIntFromInterval(0, 1000)) + ', ' + String(randomIntFromInterval(0,1000)) + ', ' + String(randomIntFromInterval(0,1000)) + ')';
	body.style.background = 
	"linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2
	+ ")";
	css.textContent = body.style.background + ";";
}


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

css.textContent = 'linear-gradient(to right, red , yellow);';