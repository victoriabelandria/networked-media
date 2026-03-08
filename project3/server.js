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

let serverStoredPosts = [];

app.get("/angelica", (request, response) => {
  response.render("angelica", { clientPosts: serverStoredPosts });
});

app.post("/upload", upload.single("theimage"), (req, res) => {
  let data = {
    text: req.body.text,
  };

  if (req.file) {
    data.image = "/uploads/" + req.file.filename;
  }

  serverStoredPosts.push(data);

  res.redirect("/angelica");
});

app.listen(8000, () => {
  console.log("server started on port 8000");
});
