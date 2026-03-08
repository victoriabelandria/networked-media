
let angle = 0;
// Q: what is the first function we always run in our javascript files? add it below this comment.
window.onload = () => {

// Q: inside the function, get the element with the id of "rotate" and store it in a variable.
let rotate = document.getElementById("rotate").innerHTML; //to store in a variable its let variablename = whatsbeingstored

setInterval(()=>{
angle++;
// rotate.style.transform= "rotate(45deg)"; to add the increasing angle it would have to ve "rotate( + angle++ + (deg)
rotate.style.transform = `rotate(${angle}deg)`; //using `` to inject a variable with the ${} syntax
},1000);

//two parameters in event listener, the first one is the name of the event we are using, the second is the callback 
document.body.addEventListener("click", ()=>{
});

let btn = document.getElementById('button');
button.addEventListener("click", ()=>{
    // btn.style.backgroundColor = "skyblue";
//     if(GamepadButton.classList.contains("clicked")) {
//         btn.classList.remove("clicked");
//     } else {
// btn.classList.add("clicked");
//         }
button.classList.toggle("hi");
        
    });
// Q: what function do we use to repeat something over time?
// A: setInterval()

// Q: what parameters does it accept?
// A: 1.function to run 2.time in ms

//Use anonimous functions 
// setInterval( ()=>{ //this represents an anon function, I write whatever I want to happen inside this anon function.


// }, 1000);

};