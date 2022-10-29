let Circle11= false
let Circle12= false
let Circle13 = false
let Circle14 = false

let Circle21 = false
let Circle22 = false
let Circle23 = false
let Circle24 = false

let Circle31 = false
let Circle32 = false
let Circle33 = false
let Circle34 = false

let Circle41 = false
let Circle42 = false
let Circle43 = false
let Circle44 = false

var boxes = [];
var turn = 0;
var red = 0;
var green = 0;
var yellow = 0;


function Handler(line){
    document.getElementById(line).style.visibility = "visible";
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