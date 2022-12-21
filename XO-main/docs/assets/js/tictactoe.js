var cmove = 0;
var winner = 0;
var cur;
var check;
let cell = [];
$(document).ready(function () {
    $(".TicTacToe").css("height", $(".TicTacToe").width());
});
$(window).resize(function () {
    $(".TicTacToe").css("height", $(".TicTacToe").width());
});
let hor1 = [1, 2, 3];
let hor2 = [4, 5, 6];
let hor3 = [7, 8, 9];
let ver1 = [1, 4, 7];
let ver2 = [2, 5, 8];
let ver3 = [3, 6, 9];
let diag1 = [1, 5, 9];
let diag2 = [3, 5, 7];

let horl1 = [1, 2, 3];
let horl2 = [4, 5, 6];
let horl3 = [7, 8, 9];
let verl1 = [1, 4, 7];
let verl2 = [2, 5, 8];
let verl3 = [3, 6, 9];
let diagl1 = [1, 5, 9];
let diagl2 = [3, 5, 7];

function win(line) {
    for (i = 0; i < 3; i++) {
        $("#sec" + line[i]).css("background", "yellow");
    }
    winner = true;
    alert(cur + " wins!");
}

function checkLine(sec) {
    if (hor1.indexOf(sec) != "-1") {
        if (hor1.indexOf(sec) == "0") {
            hor1.splice(0, 1, cur);
            ver1.splice(0, 1, cur);
            diag1.splice(0, 1, cur);
        } else if (hor1.indexOf(sec) == "1") {
            hor1.splice(1, 1, cur);
            ver2.splice(0, 1, cur);
        } else if (hor1.indexOf(sec) == "2") {
            hor1.splice(2, 1, cur);
            ver3.splice(0, 1, cur);
            diag2.splice(0, 1, cur);
        }
    } else if (hor2.indexOf(sec) != "-1") {
        if (hor2.indexOf(sec) == "0") {
            hor2.splice(0, 1, cur);
            ver1.splice(1, 1, cur);
        } else if (hor2.indexOf(sec) == "1") {
            hor2.splice(1, 1, cur);
            ver2.splice(1, 1, cur);
            diag1.splice(1, 1, cur);
            diag2.splice(1, 1, cur);
        } else if (hor2.indexOf(sec) == "2") {
            hor2.splice(2, 1, cur);
            ver3.splice(1, 1, cur);
        }
    } else {
        if (hor3.indexOf(sec) == "0") {
            hor3.splice(0, 1, cur);
            ver1.splice(2, 1, cur);
            diag2.splice(2, 1, cur);
        } else if (hor3.indexOf(sec) == "1") {
            hor3.splice(1, 1, cur);
            ver2.splice(2, 1, cur);
        } else if (hor3.indexOf(sec) == "2") {
            hor3.splice(2, 1, cur);
            ver3.splice(2, 1, cur);
            diag1.splice(2, 1, cur);
        }
    }
    if (JSON.stringify(hor1) == JSON.stringify([cur, cur, cur])) {
        win(horl1);
    } else if (JSON.stringify(hor2) == JSON.stringify([cur, cur, cur])) {
        win(horl2);
    } else if (JSON.stringify(hor3) == JSON.stringify([cur, cur, cur])) {
        win(horl3);
    } else if (JSON.stringify(ver1) == JSON.stringify([cur, cur, cur])) {
        win(verl1);
    } else if (JSON.stringify(ver2) == JSON.stringify([cur, cur, cur])) {
        win(verl2);
    } else if (JSON.stringify(ver3) == JSON.stringify([cur, cur, cur])) {
        win(verl3);
    } else if (JSON.stringify(diag1) == JSON.stringify([cur, cur, cur])) {
        win(diagl1);
    } else if (JSON.stringify(diag2) == JSON.stringify([cur, cur, cur])) {
        win(diagl2);
    }
}
function notempty(sec) {
    check = $(cell).map(function(i,v){
        if(v.toLowerCase().indexOf(sec)!=-1){return v}
    }).get();
}
function move(sec) {
    notempty(sec);
    if (winner == 0) {
        if (check.length == 0) {
            if (cmove % 2 == 0) {
                document.getElementById("sec" + sec).innerHTML += "<line class='x1' x1='50' y1='50' x2='150' y2='150' />";
                document.getElementById("sec" + sec).innerHTML += "<line class='x2' x1='150' y1='50' x2='50' y2='150' />";
                cell.push("x" + sec);
                cur = "X";
                checkLine(sec);
            } else {
                document.getElementById("sec" + sec).innerHTML += "<circle class='o' transform='rotate(-90 100 100)' cx='100' cy='100' r='45' />";
                cell.push("o" + sec);
                cur = "O";
                checkLine(sec);
            }
            cmove++;
        } else {
            alert("This cell is not empty!");
        }
    }
}