var place;
var go = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var mark = "X"
var markComputer = "O"

document.getElementById("game").style.display = 'none'; 

function xo(xo) {
  mark = xo;
  mark=="X"?markComputer="O":markComputer="X"
  document.getElementById("game").style.display = 'block'; 
  document.getElementById("question").style.display = 'none'; 
}

function turn(id) {
  if (go[id] !== "X" && go[id] !== "O" ) {
    document.getElementById(id).innerHTML = mark;
    go[id] = mark;

    if (!checkWin()) setTimeout(function() {
    computerPlay();
  }, 400);
  }
}

function checkWin() {

  if (go[1] === go[2] && go[2] === go[3]) {
    document.getElementById("1").style.backgroundColor = 'blue';
    document.getElementById("2").style.backgroundColor = 'blue';
    document.getElementById("3").style.backgroundColor = 'blue';
    win(go[1])
    return true;
  } else
  if (go[4] === go[5] && go[5] === go[6]) {
    document.getElementById("4").style.backgroundColor = 'blue';
    document.getElementById("5").style.backgroundColor = 'blue';
    document.getElementById("6").style.backgroundColor = 'blue';
    win(go[4])
    return true;
  } else
  if (go[7] === go[8] && go[8] === go[9]) {
    document.getElementById("7").style.backgroundColor = 'blue';
    document.getElementById("8").style.backgroundColor = 'blue';
    document.getElementById("9").style.backgroundColor = 'blue';
    win(go[7])
    return true;
  } else
  if (go[1] === go[4] && go[4] === go[7]) {
    document.getElementById("1").style.backgroundColor = 'blue';
    document.getElementById("4").style.backgroundColor = 'blue';
    document.getElementById("7").style.backgroundColor = 'blue';
    win(go[7])
    return true;
  } else
  if (go[2] === go[5] && go[5] === go[8]) {
    document.getElementById("2").style.backgroundColor = 'blue';
    document.getElementById("5").style.backgroundColor = 'blue';
    document.getElementById("8").style.backgroundColor = 'blue';
    win(go[2])
    return true;
  } else
  if (go[3] === go[6] && go[6] === go[9]) {
    document.getElementById("3").style.backgroundColor = 'blue';
    document.getElementById("6").style.backgroundColor = 'blue';
    document.getElementById("9").style.backgroundColor = 'blue';
    win(go[3])
  } else
  if (go[1] === go[5] && go[5] === go[9]) {
    document.getElementById("1").style.backgroundColor = 'blue';
    document.getElementById("5").style.backgroundColor = 'blue';
    document.getElementById("9").style.backgroundColor = 'blue';
    win(go[1])
    return true;
  } else
  if (go[3] === go[5] && go[5] === go[7]) {
    document.getElementById("3").style.backgroundColor = 'blue';
    document.getElementById("5").style.backgroundColor = 'blue';
    document.getElementById("7").style.backgroundColor = 'blue';
    win(go[3])
    return true;
  } else {
        var count = 0;
    for (var i = 0; i < go.length; i++) {
        if (go[i] === "O" || go[i] === "X" ) {
            count++;
        }
    }

    if (count >= 9) win("Nobody");
  }
  return false;
}

function win(winner) {
  document.getElementById("winner").innerHTML = winner+" wins!";
  setTimeout(function() {
    gameReset();
  }, 4000);
}

function gameReset() {
document.getElementById("winner").innerHTML = "";
  for (i = 1; i < 11; i++) {
    document.getElementById(i).innerHTML = "";
    document.getElementById(i).style.backgroundColor = 'grey';
    go = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  }
}

function computerPlay() {
  place = Math.floor((Math.random() * 9) + 1);
  console.log("place " + place)
  if (go[place] !== "X" && go[place] !== "O" ) {
    document.getElementById(place).innerHTML = markComputer;
    go[place] = markComputer;
  } else {
    computerPlay();
  }
  checkWin();
}



