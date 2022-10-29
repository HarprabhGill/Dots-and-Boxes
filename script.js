let Circle11= false;
let Circle12= false;
let Circle13 = false;
let Circle14 = false;
let Circle21 = false;
let Circle22 = false;
let Circle23 = false;
let Circle24 = false;
let Circle31 = false;
let Circle32 = false;
let Circle33 = false;
let Circle34 = false;
let Circle41 = false;
let Circle42 = false;
let Circle43 = false;
let Circle44 = false;

let square1 = false;
let square2 = false;
let square3 = false;
let square4 = false;
let square5 = false;
let square6 = false;
let square7 = false;
let square8 = false;
let square9 = false;

var boxes = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
var turn = 0;
var red = 0;
var green = 0;
var yellow = 0;

var line11 = document.getElementById("line11");
var line12 = document.getElementById("line12");
var line13 = document.getElementById("line13");
var line21 = document.getElementById("line21");
var line22 = document.getElementById("line22");
var line23 = document.getElementById("line23");
var line31 = document.getElementById("line31");
var line32 = document.getElementById("line32");
var line33 = document.getElementById("line33");
var line41 = document.getElementById("line41");
var line42 = document.getElementById("line42");
var line43 = document.getElementById("line43");

var vline11 = document.getElementById("vline11");
var vline12 = document.getElementById("vline12");
var vline13 = document.getElementById("vline13");
var vline14 = document.getElementById("vline14");
var vline21 = document.getElementById("vline21");
var vline22 = document.getElementById("vline22");
var vline23 = document.getElementById("vline23");
var vline24 = document.getElementById("vline24");
var vline31 = document.getElementById("vline31");
var vline32 = document.getElementById("vline32");
var vline33 = document.getElementById("vline33");
var vline34 = document.getElementById("vline34");

function Check(turn) {
    if(square1 == false){
        if(line11.style.visibility == "visible" && line21.style.visibility == "visible" && vline11.style.visibility == "visible" && vline12.style.visibility == "visible") {
            boxes[0] = true;
            square1 = true;
        }
    }
    if(square2 == false){
        if(line12.style.visibility == "visible" && line22.style.visibility == "visible" && vline12.style.visibility == "visible" && vline13.style.visibility == "visible") {
            boxes[1] = true;
            square2 = true;
        }
    }
    if(square3 == false){
        if(line13.style.visibility == "visible" && line23.style.visibility == "visible" && vline13.style.visibility == "visible" && vline14.style.visibility == "visible") {
            boxes[2] = true;
            square3 = true;
        }
    }
    if(square4 == false){
        if(line21.style.visibility == "visible" && line31.style.visibility == "visible" && vline21.style.visibility == "visible" && vline22.style.visibility == "visible") {
            boxes[3] = true;
            square4 = true;
        }
    }
    if(square5 == false){
        if(line22.style.visibility == "visible" && line32.style.visibility == "visible" && vline22.style.visibility == "visible" && vline23.style.visibility == "visible") {
            boxes[4] = true;
            square5 = true;
        }
    }
    if(square6 == false){
        if(line23.style.visibility == "visible" && line33.style.visibility == "visible" && vline23.style.visibility == "visible" && vline24.style.visibility == "visible") {
            boxes[5] = true;
            square6 = true;
        }
    }
    if(square7 == false){
        if(line31.style.visibility == "visible" && line41.style.visibility == "visible" && vline31.style.visibility == "visible" && vline32.style.visibility == "visible") {
            boxes[6] = true;
            square7 = true;
        }
    }
    if(square8 == false){
        if(line32.style.visibility == "visible" && line42.style.visibility == "visible" && vline32.style.visibility == "visible" && vline33.style.visibility == "visible") {
            boxes[7] = true;
            square8 = true;
        }
    }
    if(square9 == false){
        if(line33.style.visibility == "visible" && line43.style.visibility == "visible" && vline33.style.visibility == "visible" && vline34.style.visibility == "visible") {
            boxes[8] = true;
            square9 = true;
        }
    }

    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i] === true){
            delete boxes[i];
            if(turn == 0){
                red += 1;
                window.turn -= 1;
                document.getElementById("p1Score").innerHTML = "Player 1 Score: " + red;
            }
            else if(turn == 1){
                green += 1;
                window.turn -= 1;
                document.getElementById("p2Score").innerHTML = "Player 2 Score: " + green;
            }
            else if(turn == 2){
                yellow += 1;
                window.turn += 2;
                document.getElementById("p3Score").innerHTML = "Player 3 Score: " + yellow;
            }
        }
    }
}

function Handler(line){
    var temp = document.getElementById(line);
    if(temp.style.visibility == "visible"){
        return;
    }
    if(turn == 0){
        temp.style.backgroundColor = "red";
        temp.style.visibility = "visible";
        Check(turn);
        turn +=1;
    }
    else if(turn == 1){
        temp.style.backgroundColor = "green";
        temp.style.visibility = "visible";
        Check(turn);
        turn +=1;
    }
    else if(turn == 2){
        temp.style.backgroundColor = "orange";
        temp.style.visibility = "visible";
        Check(turn);
        turn -= 2;
    }
}

document.getElementById("circle11").addEventListener('click',()=>{
    Circle11 = true
    if(Circle11 && Circle12) {Circle11 = false; Circle12 = false; Handler("line11");}
    else if(Circle11 && Circle21) {Circle11 = false; Circle21 = false; Handler("vline11");}
})

document.getElementById("circle12").addEventListener('click',()=>{
    Circle12 = true
    if(Circle12 && Circle11) {Circle11 = false; Circle12 = false; Handler("line11");}
    else if(Circle12 && Circle13) {Circle12 = false; Circle13 = false; Handler("line12");}
    else if(Circle12 && Circle22) {Circle12 = false; Circle22 = false; Handler("vline12");}
})

document.getElementById("circle13").addEventListener('click',()=>{
    Circle13 = true
    if(Circle13 && Circle12) {Circle12 = false; Circle13 = false; Handler("line12");}
    else if(Circle13 && Circle14) {Circle13 = false; Circle14 = false; Handler("line13");}
    else if(Circle13 && Circle23) {Circle13 = false; Circle23 = false; Handler("vline13");}
})

document.getElementById("circle14").addEventListener('click',()=>{
    Circle14 = true
    if(Circle14 && Circle13) {Circle13 = false; Circle14 = false; Handler("line13");}
    else if(Circle14 && Circle24) {Circle14 = false; Circle24 = false; Handler("vline14");}
})

document.getElementById("circle21").addEventListener('click',()=>{
    Circle21 = true
    if(Circle21 && Circle22) {Circle21 = false; Circle22 = false; Handler("line21");}
    else if(Circle11 && Circle21) {Circle11 = false; Circle21 = false; Handler("vline11");}
    else if(Circle31 && Circle21) {Circle31 = false; Circle21 = false; Handler("vline21");}
})

document.getElementById("circle22").addEventListener('click',()=>{
    Circle22 = true
    if(Circle22 && Circle21) {Circle21 = false; Circle22 = false; Handler("line21");}
    else if(Circle22 && Circle23) {Circle23 = false; Circle22 = false; Handler("line22");}
    else if(Circle12 && Circle22) {Circle12 = false; Circle22 = false; Handler("vline12");}
    else if(Circle32 && Circle22) {Circle32 = false; Circle22 = false; Handler("vline22");}
})

document.getElementById("circle23").addEventListener('click',()=>{
    Circle23 = true
    if(Circle23 && Circle22) {Circle23 = false; Circle22 = false; Handler("line22");}
    else if(Circle23 && Circle24) {Circle23 = false; Circle24 = false; Handler("line23");}
    else if(Circle13 && Circle23) {Circle13 = false; Circle23 = false; Handler("vline13");}
    else if(Circle33 && Circle23) {Circle33 = false; Circle23 = false; Handler("vline23");}
})

document.getElementById("circle24").addEventListener('click',()=>{
    Circle24 = true
    if(Circle24 && Circle23) {Circle23 = false; Circle24 = false; Handler("line23");}
    else if(Circle14 && Circle24) {Circle14 = false; Circle24 = false; Handler("vline14");}
    else if(Circle34 && Circle24) {Circle34 = false; Circle24 = false; Handler("vline24");}
})

document.getElementById("circle31").addEventListener('click',()=>{
    Circle31 = true
    if(Circle31 && Circle32) {Circle31 = false; Circle32 = false; Handler("line31");}
    else if(Circle31 && Circle21) {Circle31 = false; Circle21 = false; Handler("vline21");}
    else if(Circle31 && Circle41) {Circle31 = false; Circle41 = false; Handler("vline31");}
})

document.getElementById("circle32").addEventListener('click',()=>{
    Circle32 = true
    if(Circle32 && Circle31) {Circle31 = false; Circle32 = false; Handler("line31");}
    else if(Circle32 && Circle33) {Circle33 = false; Circle32 = false; Handler("line32");}
    else if(Circle32 && Circle22) {Circle32 = false; Circle22 = false; Handler("vline22");}
    else if(Circle32 && Circle42) {Circle32 = false; Circle42 = false; Handler("vline32");}
})

document.getElementById("circle33").addEventListener('click',()=>{
    Circle33 = true
    if(Circle33 && Circle32) {Circle33 = false; Circle32 = false; Handler("line32");}
    else if(Circle33 && Circle34) {Circle33 = false; Circle34 = false; Handler("line33");}
    else if(Circle33 && Circle23) {Circle33 = false; Circle23 = false; Handler("vline23");}
    else if(Circle33 && Circle43) {Circle33 = false; Circle43 = false; Handler("vline33");}
})

document.getElementById("circle34").addEventListener('click',()=>{
    Circle34 = true
    if(Circle34 && Circle33) {Circle33 = false; Circle34 = false; Handler("line33");}
    else if(Circle34 && Circle24) {Circle34 = false; Circle24 = false; Handler("vline24");}
    else if(Circle34 && Circle44) {Circle34 = false; Circle44 = false; Handler("vline34");}
})

document.getElementById("circle41").addEventListener('click',()=>{
    Circle41 = true
    if(Circle41 && Circle42) {Circle41 = false; Circle42 = false; Handler("line41");}
    else if(Circle31 && Circle41) {Circle31 = false; Circle41 = false; Handler("vline31");}
})

document.getElementById("circle42").addEventListener('click',()=>{
    Circle42 = true
    if(Circle42 && Circle41) {Circle41 = false; Circle42 = false; Handler("line41");}
    else if(Circle42 && Circle43) {Circle43 = false; Circle42 = false; Handler("line42");}
    else if(Circle32 && Circle42) {Circle32 = false; Circle42 = false; Handler("vline32");}
})

document.getElementById("circle43").addEventListener('click',()=>{
    Circle43 = true
    if(Circle43 && Circle42) {Circle43 = false; Circle42 = false; Handler("line42");}
    else if(Circle43 && Circle44) {Circle43 = false; Circle44 = false; Handler("line43");}
    else if(Circle33 && Circle43) {Circle33 = false; Circle43 = false; Handler("vline33");}
})

document.getElementById("circle44").addEventListener('click',()=>{
    Circle44 = true
    if(Circle44 && Circle43) {Circle43 = false; Circle44 = false; Handler("line43");}
    else if(Circle34 && Circle44) {Circle34 = false; Circle44 = false; Handler("vline34");}
})