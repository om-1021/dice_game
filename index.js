var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;


var img1="images/dice"+randomnumber1+".png";
var img2="images/dice"+randomnumber2+".png";

document.querySelector(".dice .img1").setAttribute("src",img1)
document.querySelector(".dice .img2").setAttribute("src",img2)


if(randomnumber1>randomnumber2)
document.querySelector(".container h1").innerHTML=" 🚩 player 1 wins"
else if(randomnumber1<randomnumber2)
document.querySelector(".container h1").innerHTML="player 2 wins 🚩 "
else
document.querySelector(".container h1").innerHTML="DRAW!!! 🤝"
