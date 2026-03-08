//these are two of the three libraries we have installed that we need to make adjustments for
const express = require("express");
const multer = require("multer");

//set up our applications that use our libraries
const app = express(); // using the express library to start and express aplication
const uploadProcessor = multer({ dest: "public/uploads/" }); //uses the multer library to upload files

// global array to sotre all the posts
let posts = [];

//our middleware settings for our server
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); //enable the ability to render ejs files

//routes
app.get("/", (request, response) => {
  response.render("index.ejs", { allPosts: posts });
});

//ading a second parameter to the post handler to process the file that is uploaded
app.post(
  "/makePost",
  uploadProcessor.single("myImage"),
  (request, response) => {
    let individualPost = {
      caption: request.body.caption,
    };
    if (request.file) {
      individualPost.file = request.file.filename;
    }
    console.log(individualPost);
    posts.push(individualPost);
    response.redirect("/");
  },
);

// LAST LINE: Listen for requests
app.listen(5001, () => {
  console.log("server is running on 5001");
});
