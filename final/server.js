const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "public/uploads" });

app.use(express.static("public")); //  exposes and allows us to use the static files
app.use(express.urlencoded({ extended: true })); // allows us to use request.body, allows us to use request.file
app.set("view engine", "ejs"); //  enables use of ejs, response.render

app.get("/", (request, response) => {
  response.render("index");
});

let angelicaPosts = [];
let papaPosts = [];
let mamaPosts = [];
let jorgitoPosts = [];
let victoriaPosts = [];

app.get("/angelica", (request, response) => {
  response.render("angelica", { clientPosts: angelicaPosts });
});

app.get("/papa", (request, response) => {
  response.render("papa", { clientPosts: papaPosts });
});

app.get("/mama", (request, response) => {
  response.render("mama", { clientPosts: mamaPosts });
});

app.get("/jorgito", (request, response) => {
  response.render("jorgito", { clientPosts: jorgitoPosts });
});

app.get("/victoria", (request, response) => {
  response.render("victoria", { clientPosts: victoriaPosts });
});

app.post("/upload/angelica", upload.single("theimage"), (req, res) => {
  let data = { text: req.body.text };
  if (req.file) {
    data.image = "/uploads/" + req.file.filename;
  }
  angelicaPosts.push(data);
  res.redirect("/angelica");
});

app.post("/upload/papa", upload.single("theimage"), (req, res) => {
  let data = { text: req.body.text };
  if (req.file) {
    data.image = "/uploads/" + req.file.filename;
  }
  papaPosts.push(data);
  res.redirect("/papa");
});

app.post("/upload/mama", upload.single("theimage"), (req, res) => {
  let data = { text: req.body.text };
  if (req.file) {
    data.image = "/uploads/" + req.file.filename;
  }
  mamaPosts.push(data);
  res.redirect("/mama");
});

app.post("/upload/jorgito", upload.single("theimage"), (req, res) => {
  let data = { text: req.body.text };
  if (req.file) {
    data.image = "/uploads/" + req.file.filename;
  }
  jorgitoPosts.push(data);
  res.redirect("/jorgito");
});

app.post("/upload/victoria", upload.single("theimage"), (req, res) => {
  let data = { text: req.body.text };
  if (req.file) {
    data.image = "/uploads/" + req.file.filename;
  }
  victoriaPosts.push(data);
  res.redirect("/victoria");
});

app.listen(1140, () => {
  console.log("server started on port 1140");
});
