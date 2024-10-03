
let box =  document.getElementById("mybox");
let line = document.getElementById("myline");
let time = document.getElementById("time");



function calculate(){
    

    let boxline = ((box.value*0.33)+(line.value*0.66))/time.value;

    document.getElementById("result").innerText =boxline;
    
};



