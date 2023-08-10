
const dices = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var player1Score = Math.floor(Math.random() * 6);
var player2Score = Math.floor(Math.random() * 6);

if(player1Score == player2Score){
    document.querySelector("h1").innerHTML="DRAW !";
    document.querySelector(".img1").setAttribute("src",dices[player1Score]);
    document.querySelector(".img2").setAttribute("src",dices[player2Score]);
}
else if(player1Score > player2Score){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS !";
    document.querySelector(".img1").setAttribute("src",dices[player1Score]);
    document.querySelector(".img2").setAttribute("src",dices[player2Score]);
}
else{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS !";
    document.querySelector(".img1").setAttribute("src",dices[player1Score]);
    document.querySelector(".img2").setAttribute("src",dices[player2Score]);
}


