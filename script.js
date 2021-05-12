var entryForm;
var halfInput;
var halfButton;
var fortuneInput;
var fortuneButton;
var fortuneOutput;

window.addEventListener('DOMContentLoaded', function(){

halfInput = document.getElementById("half-input");
halfButton = document.getElementById("half-button");
fortuneInput = document.getElementById("fortune-input");
fortuneButton = document.getElementById("fortune-button");
fortuneOutput = document.getElementById("fortune-output");


halfButton.addEventListener("click", halfNumber);
fortuneButton.addEventListener("click", fortune);
});

function halfNumber(){
  var result = halfInput.value / 2;
  alert("Half of " + halfInput.value + " is " + result + "!");
}
function fortune(){
  restyle();
  var randomFortune = Math.floor(Math.random() * 5);
  var fortunes = ["you will be able to leave your house soon.",
  "love is around the corner.",
  "buy a lottery ticket. Trust me.",
  "you will meet new friends soon.",
  "you will receive a pleasant surprise."];
  fortuneOutput.innerHTML=fortuneInput.value + ", " + fortunes[randomFortune];
}
function restyle(){
  fortuneOutput.style.color = "rgb("+ Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) +")";
  fortuneOutput.style.fontSize = Math.floor(Math.random() * 50 + 5) +"px";
  fortuneOutput.style.fontWeight = Math.floor(Math.random() * 1000);
}
