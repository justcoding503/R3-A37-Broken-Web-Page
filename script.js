let counter = 0; //bug
let Interval; //bug
const inputvalue = document.getElementById("nameInput"); //bug



function start() {
    console.log(inputvalue.value);
    console.log(counter)

    Interval = setInterval(function(){ //bug
    document.body.style.backgroundColor = "yellow"; //bug
    counter++;
    let box = document.getElementById("box"); //bug
    box.style.left = counter + "px";
    
}, 10);
setTimeout(() => {
    clearInterval(Interval);
}, (inputvalue.value * 1000));
}
