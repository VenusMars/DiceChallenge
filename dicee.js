
//Store the dice images into an array
var player=[];
for(var i=1;i<=6;i++){
   player.push("images/dice" + i + ".png");
}

//Pick a random position from stored array
function whosPlaying(player) {
 var numberOfOptions=player.length;
 var playerPosition=Math.floor(Math.random()*numberOfOptions);
 return playerPosition;  
 
}

// Return the image position 
var player1Position=whosPlaying(player);
var player2Position=whosPlaying(player);

// Based on the return position, announce a winner
var winnerText="";
if (player1Position>player2Position){
    winnerText="😊 Player 1 wins!";
}else if (player2Position>player1Position){
    winnerText="Player 2 wins! 😊";
}else {
    winnerText="Draw!";
}

//Get the attributes using DOM
var firstImg = document.getElementsByClassName("img1")[0];
var secondImg = document.getElementsByClassName("img2")[0];

// Get the image name based on its position
var player1Selection=player[player1Position];
var player2Selection=player[player2Position];

// set the attribute for the image
firstImg.setAttribute("src",player1Selection);
secondImg.setAttribute("src",player2Selection);
document.querySelector("h1").innerHTML=winnerText;


