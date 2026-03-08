window.onload = () => {
    console.log("page has loaded");
//create the new span
    let newSpan = document.createElement("span");
//adding class to the new span
    newSpan.classList.add("test-body");
//adding text
    newSpan.innerHTML = "this is a new span";
//appendchild adds the new element to the page - document referes to the entire document of the html - body means body of the document
    document.body.appendChild(newSpan);

    //this is how we get the date for right this moment
    let date = new Date();
    // date.toLocaleTimeString();
    let oneSpan = document.getElementsByClassName("text-body");
    //set Interval()
    //1 param: function/action to be done
    //2 param: how much time in ms
    setInterval(()=>{
         let date = new Date(); //this is what makes it moves upwards, ALWAYS include it
        oneSpan[0].innerHTML = date.toLocaleTimeString(); //this is where I want my new time to be display
    }, 1000) //read about empty functions in last class' notes
}