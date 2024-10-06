
let box =  document.getElementById("mybox");
let line = document.getElementById("myline");
let time = document.getElementById("time");

let boxJit =  document.getElementById("myboxjit");
let lineJit = document.getElementById("mylinejit");
let timeJit = document.getElementById("timejit");


function calculate(){
    

    let boxlinetime = ((box.value*0.34)+(line.value*0.67))/time.value;

    boxline =parseInt(boxlinetime)
    document.getElementById("result").innerText =boxline;

    if (boxline < 60 ) {
        document.getElementById("scale").innerText ="Nota 5 (0% - 60%)"
    }
    else if (boxline < 89){
        document.getElementById("scale").innerText ="Nota 4 (61% - 89%)"
    }
    else if (boxline < 105) {
        document.getElementById("scale").innerText ="Nota 3 (90% - 105%)"
    }
    else if (boxline < 120) {
        document.getElementById("scale").innerText ="Nota 2 (106% - 120%)"
    }
    else {
        document.getElementById("scale").innerText ="Nota 1 (121% - 140%)"
    }
    
};



function jit(){
    

    let boxlinetimejit = ((boxJit.value*0.34)+(lineJit.value*0.67))/timeJit.value;

    boxlinejit =parseInt(boxlinetimejit)
    document.getElementById("result").innerText =boxlinejit;

    if (boxlinejit < 60 ) {
        document.getElementById("scale").innerText ="Nota 5 (0% - 60%)"
    }
    else if (boxlinejit < 89){
        document.getElementById("scale").innerText ="Nota 4 (61% - 89%)"
    }
    else if (boxlinejit < 105) {
        document.getElementById("scale").innerText ="Nota 3 (90% - 105%)"
    }
    else if (boxlinejit < 120) {
        document.getElementById("scale").innerText ="Nota 2 (106% - 120%)"
    }
    else {
        document.getElementById("scale").innerText ="Nota 1 (121% - 140%)"
    }

    
    
};
