//this show up immediately and have no issues bc they arent manipulating anything on our site

alert("hello");
console.log("hehe");

window.onload = () =>{ //this one always instead of DOMContentLoaded
    console.log("the site has now fully loaded");

document.getElementById("main").innerHTML = "<span>update</span> after loading";

//getting the html and adjusting style. Instead of - we use camel case (camel case is second word starts with upper case)
document.getElementById('main').style.backgroundColor = "pink";

//using a variable to store the document.getElementById because writing that continously is annoying
let mainContent = document.getElementById('main')
mainContent.style.color = "b6c4a2";

//apply an existing (or nonexisting) class to my element
mainContent.classList.add('blue');

//HOW TO ADD ELEMENTS WITH JS
//1. Create the type of element and storing in a variable 
let container = document.getElementById("container");
//2. Modify the content of the new element
let item = document.createElement("p");
//3. add the created element to the page via the element it will be added to
item.textContent = "this has been created with js";
//appendChild means is being added to the page
container.appendChild(item);
};

