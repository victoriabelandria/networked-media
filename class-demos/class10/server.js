//import express to use the library
const express = require("express");

//initializr the express application
const app = express();

//set up middleware  -- setting for my server
//this public is the folder that will hold all of my front-end files
//al html, css and front-end js will live there
app.use(express.static("public"));
//set my templating software
app.set("view engine", "ejs");

//storing all my guest inside of my global server array
//this array will exist until my server restarts
let guestNames = [];

//route handlers - always goes after app, and before app.listen like everything else
// server when you get a request at a location (url), do some action for it

//GET 1st param: location, route 2nd param: action to happen when client makes request
app.get("/", (request, response) => {
  response.send("hi");
});
app.get("/helloworld", (request, response) => {
  response.send("hey");
});
app.get("/hi", (request, response) => {
  //allows the server to redirect to another route
  response.redirect("/helloworld");
});

app.get("/guestbook", (request, response) => {
  //allows our server to send and render our ejs as html to the client
  let dataToBeSent = {
    blah: "hello",
    firstGuest: guestNames[0],
  };

  //first param: name of the ejs file
  //2nd param: object to be sent to client
  response.render("guestbook.ejs", dataToBeSent);
});

//this route handles the requesr that is coming from the html form
app.get("/sign", (request, response) => {
  let name = request.query.guestName;
  //storing the name on my server side
  guestNames.push(name);
  console.log(guestNames);
  response.send("thanks, " + name);
  //another option instead of new page is the one below, it take us back
  // response.redirect("/guestbook");
});

//ALWAYS BE AT THE END OF OUR FILE
// espress application please listen for requests coming in
//1st param is port number we're using // you can use 8080,3001,3002, etc whatever you want
//2nd param is callback function
app.listen(8080, () => {
  //when we use our console.log inside of a server file it will show un in the terminal NOT the browser console
  console.log("server has started");
});
