let serverStoredPosts = [];

app.get("/", (request, response) => {
response.render("index.ejs", { clientPosts: serverStoredPosts });
});

app.post("/upload", upload.single("theimage"), (req, res) => {
let currentDate = new Date();

let data = {
text: req.body.text,
date: currentDate.toLocaleString(),
timestamp: currentDate.getTime(),
};

if (req.file) {
data.image = "/uploads/" + req.file.filename;
}

serverStoredPosts.push(data);

res.redirect("/");
});
