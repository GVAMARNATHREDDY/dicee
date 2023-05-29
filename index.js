
var N =Math.floor(Math.random()*6) + 1;
 
var img1source = "images/dice" + N + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",img1source);


var N2 =Math.floor(Math.random()*6) + 1;
 
var img2source = "images/dice" + N2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",img2source);

if(N > N2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(N < N2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}