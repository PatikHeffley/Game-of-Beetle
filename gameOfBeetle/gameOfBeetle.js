"use Strict";
var $ = function(id) {
    return document.getElementById(id);
}
var leg = {
    p1X: 140,
    p2X: 140,
    p1Y: 245,
    p2Y: 245,
}

var p = 0;
var eyes1X = 350;
var eyes2X = 350;
var turn = 1;
var player = 0;
var ctx = 0;
var length = 0;
var height = 0;
var win = false;
var beetle1 = {
    head: false,
    body: false,
    legs: 0,
    wings: 0,
    antenna: 0,
    eyes: 0,
    score: 0,
}
var beetle2 = {
    head: false,
    body: false,
    legs: 0,
    wings: 0,
    antenna: 0,
    eyes: 0,
    score: 0,
}
var player = {
    head: false,
    body: false,
    legs: 0,
    wings: 0,
    antenna: 0,
    eyes: 0,
    score: 0,
}
function roll() {
    if (win == true) {

    }
    else {
    // Dice graphics
    var result = Math.floor(Math.random() * 6) + 1;
    if (turn == 1) {
        $("p1Roll").innerHTML = "<img src='images/" + result + ".png'></img>";
        build(result, turn);
        turn = 2;
    }
    else {
        $("p2Roll").innerHTML = "<img src='images/" + result + ".png'></img>";
        build(result, turn);
        turn = 1;
    }
    $("turn").innerHTML = "Player" +  turn + "\'s turn";
}
}
function build(i, turn) {
    // Set the correct beetle variable to the player variable
    if (turn == 1) {
        p = "Beetle 1";
        player = beetle1
        player.eyes = beetle1.eyes;
        player.legs = beetle1.legs;
        player.score = beetle1.score;
        c = $("player1");
    }
    else {
        p = "Beetle 2";
        player = beetle2;
        player.eyes = beetle2.eyes;
        player.legs = beetle2.legs;
        player.score = beetle2.score;
        c = $("player2");
    }
    ctx = c.getContext("2d");
    // Eyes
    if (i == 1 && player.body == true && player.head == true && player.eyes < 2) {
        player.eyes += 1;
        eyes();
        player.score += 1;
        $("addition").innerHTML = p + " Gets 1 Eye"
    }
    // Antenna
    if (i == 2 && player.body == true && player.head == true && player.antenna < 2) {
        player.antenna += 1;
        antenna();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        player.score += 1;
        $("addition").innerHTML = p + " Gets 1 Antenna"
    }
    // Legs
    if (i == 3 && player.body == true && player.legs < 6) {
        player.legs += 1;
        legs();
        player.score += 1;
        $("addition").innerHTML = p + " Gets 1 Leg"
    }
    // Wings
    if (i == 4 && player.body == true && player.wings < 2) {
        player.wings += 1;
        wings();
        ctx.fillStyle = "black";
        player.score += 1;
        $("addition").innerHTML = p + " Gets 1 Wing"
    }
    // Head
    if (i == 5 && player.head == false && player.body == true) {
        player.head = true;
        head();
        player.score += 1;
        $("addition").innerHTML = p + " Gets a head"
    }
    // Body
    if (i == 6 && player.body == false) {
        $("addition").innerHTML = p + " Gets 1 body"
        player.body = true;
        length = 250;
        height = 250;
        ctx.fillStyle = "blue";
        player.score += 1;
        body();
        // Drawing the Body
        setTimeout(function() {
            ctx.fillStyle = "red";
            body();
        }, 100);
        setTimeout(function() {
            ctx.fillStyle = "green";
            body();
        }, 200);
        setTimeout(function() {
            ctx.fillStyle = "purple";
            body();
        }, 300);
        setTimeout(function() {
            ctx.fillStyle = "yellow";
            body();
        }, 400);
        setTimeout(function() {
            ctx.fillStyle = "#03fc9d";
            body();
        }, 500);
    }
    // Set the changed player variable to the correct beetle variable
    if (turn == 1) {
        beetle1 = player;
        beetle1.eyes = player.eyes;
        beetle1.legs = player.legs;
        beetle1.score = player.score;
        $("score1").innerHTML = "Player 1's Score: " + beetle1.score;
        if (beetle1.score == 14) {
            $("Win").innerHTML = "Player 1 Wins!";
            Win();
        }
    }
    else {
        beetle2 = player;
        beetle2.eyes = player.eyes;
        beetle2.legs = player.legs;
        beetle2.score = player.score;
        $("score2").innerHTML = "Player 2's Score: " + beetle2.score;
        if (beetle2.score == 14) {
            $("Win").innerHTML = "Player 2 Wins!";
            Win();
        }
    }
}

// Canvas Drawings
function body() {
    ctx.beginPath();
    ctx.arc(length, height, 53, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    length += 20;
    height += 20;
}
function head() {
    ctx.fillStyle = "white";
    ctx.beginPath();
        ctx.arc(370, 370, 65, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        setTimeout(function() {
            ctx.beginPath();
        ctx.moveTo(350,400)
        ctx.bezierCurveTo(350, 410, 400, 410, 400, 400);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        }, 400);
}
function eyes() {
    if (turn == "1") {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(eyes1X, 350, 20, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    
        setTimeout(function() {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(eyes1X, 350, 10, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        eyes1X += 50;
    }, 400);
    }
    else {
        ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(eyes2X, 350, 20, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    setTimeout(function() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(eyes2X, 350, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    eyes2X += 50;
}, 400);
    }
    
}
function wings() {
    if (turn == "1") {
        if (beetle1.wings == 1) {
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(280,280);
        ctx.arcTo(280, 150, 200, 200, 50);
        ctx.arcTo(200, 300, 280, 280, 50);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        }
        else {
            ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(290, 280);
        ctx.arcTo(290, 150, 360, 200, 50);
        ctx.arcTo(360, 300, 290, 280, 50);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        }
    }
    else {
        if (beetle2.wings == 1) {
            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.moveTo(280,280);
            ctx.arcTo(280, 150, 200, 200, 50);
            ctx.arcTo(200, 300, 280, 280, 50);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            }
            else {
                ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.moveTo(290, 280);
            ctx.arcTo(290, 150, 360, 200, 50);
            ctx.arcTo(360, 300, 290, 280, 50);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            }
    }
}
function legs() {
    if (turn == "1") {
        ctx.fillStyle = "black";
        ctx.beginPath();
        leg.p1X += 60;
    leg.p1Y -= 15;
        ctx.moveTo(leg.p1X, leg.p1Y);
        leg.p1X -= 40;
    leg.p1Y += 40;
        ctx.lineTo(leg.p1X, leg.p1Y)
        ctx.stroke();
        ctx.closePath();
    }
    else {
    ctx.fillStyle = "black";
    ctx.beginPath();
    leg.p2X += 60;
    leg.p2Y -= 15;
    ctx.moveTo(leg.p2X, leg.p2Y);
    leg.p2X -= 40;
    leg.p2Y += 40;
    ctx.lineTo(leg.p2X, leg.p2Y)
    ctx.stroke();
    ctx.closePath();
    }
}
function antenna() {
    ctx.lineWidth = 10;
    if (turn == "1") {
        if (beetle1.antenna == 1) {
       ctx.beginPath();
       ctx.strokeStyle = "#fc0330";
       ctx.moveTo(375, 310);
       ctx.lineTo(325, 275);
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black"
        }
        else {
            ctx.beginPath();
            ctx.moveTo(375, 310);
            ctx.strokeStyle = "#fc0330";
            ctx.lineTo(425, 275);
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black"
        }
    }
    else {
        if (beetle2.antenna == 1) {
            ctx.strokeStyle = "#fc0330";
       ctx.beginPath();
       ctx.moveTo(375, 310);
       ctx.lineTo(325, 275);
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black"
        }
        else {
            ctx.beginPath();
            ctx.strokeStyle = "#fc0330";
            ctx.moveTo(375, 310);
            ctx.lineTo(425, 275);
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black"
        }
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black"
}
function Win() {
    document.body.style.backgroundColor = "Yellow";
    win = true;
    $("restart").style.opacity = "1";
}