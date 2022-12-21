var cmove = 0;
var cur;
let cell = [];
//lines
/*
let hor1 = [1,2,3];
let hor2 = [4,5,6];
let hor3 = [7,8,9];
let ver1 = [1,4,7];
let ver2 = [2,5,8];
let ver3 = [3,6,9];
let diag1 = [1,5,9];
let diag2 = [3,5,7];

let horl1 = [1,2,3];
let horl2 = [4,5,6];
let horl3 = [7,8,9];
let verl1 = [1,4,7];
let verl2 = [2,5,8];
let verl3 = [3,6,9];
let diagl1 = [1,5,9];
let diagl2 = [3,5,7];
*/

function checkLine(sec, cur) {
    /*if (hor1.indexOf(sec) != "-1") {
        if (hor1.indexOf(sec) == "0") {
            hor1.splice(0, 1, cur)
            ver1.splice(0, 1, cur)
            diag1.splice(0, 1, cur)
        } else if (hor1.indexOf(sec) == "1") {
            hor1.splice(1, 1, cur)
            ver2.splice(0, 1, cur)
        } else if (hor1.indexOf(sec) == "2") {
            hor1.splice(2, 1, cur)
            ver3.splice(0, 1, cur)
            diag2.splice(0, 1, cur)
        }
    } else if (hor2.indexOf(sec) != "-1") {
        if (hor2.indexOf(sec) == "0") {
            hor2.splice(0, 1, cur)
            ver1.splice(1, 1, cur)
        } else if (hor2.indexOf(sec) == "1") {
            hor2.splice(1, 1, cur)
            ver2.splice(1, 1, cur)
            diag1.splice(1, 1, cur)
            diag2.splice(1, 1, cur)
        } else if (hor2.indexOf(sec) == "2") {
            hor2.splice(2, 1, cur)
            ver3.splice(1, 1, cur)
        }
    } else {
        if (hor3.indexOf(sec) == "0") {
            hor3.splice(0, 1, cur)
            ver1.splice(2, 1, cur)
            diag2.splice(2, 1, cur)
        } else if (hor3.indexOf(sec) == "1") {
            hor3.splice(1, 1, cur)
            ver2.splice(2, 1, cur)
        } else if (hor3.indexOf(sec) == "2") {
            hor3.splice(2, 1, cur)
            ver3.splice(2, 1, cur)
            diag1.splice(2, 1, cur)
        }
    }
    if (JSON.stringify(hor1) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+horl1[0]).parentElement.style.cssText = "background:yellow;  margin-left:-2px;";
        document.getElementById("sec"+horl1[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+horl1[2]).parentElement.style.cssText = "background:yellow; ";
    } else if (JSON.stringify(hor2) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+horl2[0]).parentElement.style.cssText = "background:yellow;  margin-left:-2px;";
        document.getElementById("sec"+horl2[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+horl2[2]).parentElement.style.cssText = "background:yellow; ";
    } else if (JSON.stringify(hor3) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+horl3[0]).parentElement.style.cssText = "background:yellow;  margin-left:-2px;";
        document.getElementById("sec"+horl3[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+horl3[2]).parentElement.style.cssText = "background:yellow; ";
    } else if (JSON.stringify(ver1) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+verl1[0]).parentElement.style.cssText = "background:yellow;  margin-top:-2px;";
        document.getElementById("sec"+verl1[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+verl1[2]).parentElement.style.cssText = "background:yellow; ";
    } else if (JSON.stringify(ver2) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+verl2[0]).parentElement.style.cssText = "background:yellow;  margin-top:-2px;";
        document.getElementById("sec"+verl2[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+verl2[2]).parentElement.style.cssText = "background:yellow; ";
    } else if (JSON.stringify(ver3) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+verl3[0]).parentElement.style.cssText = "background:yellow;  margin-top:-2px;";
        document.getElementById("sec"+verl3[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+verl3[2]).parentElement.style.cssText = "background:yellow; ";
    } else if (JSON.stringify(diag1) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+diagl1[0]).parentElement.style.cssText = "background:yellow;  margin-top:-2px; margin-left: -2px;";
        document.getElementById("sec"+diagl1[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+diagl1[2]).parentElement.style.cssText = "background:yellow; ";
    } else if (JSON.stringify(diag2) == JSON.stringify([cur,cur,cur])) {
        document.getElementById("sec"+diagl2[0]).parentElement.style.cssText = "background:yellow;  margin-top:-2px;";
        document.getElementById("sec"+diagl2[1]).parentElement.style.cssText = "background:yellow; ";
        document.getElementById("sec"+diagl2[2]).parentElement.style.cssText = "background:yellow;  margin-left: -2px;";
    }*/
    
}

function move(sec) {
    if (cell.indexOf(sec) == "-1") {
        if (cmove%2 == 0) {
            document.getElementById("sec"+sec).innerHTML += "<line class='x1' x1='50' y1='50' x2='150' y2='150' />";
            document.getElementById("sec"+sec).innerHTML += "<line class='x2' x1='150' y1='50' x2='50' y2='150' />";
            cell.push("x"+sec);
            checkLine(sec, "x");
        } else {
            document.getElementById("sec"+sec).innerHTML += "<circle class='o' transform='rotate(-90 100 100)' cx='100' cy='100' r='45' />";
            cell.push("y"+sec);
            checkLine(sec, "o");
        }
        cmove++;
    } else {
        console.log("np");
    }
}