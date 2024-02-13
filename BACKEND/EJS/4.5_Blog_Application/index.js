import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
var blogs = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/create_blog", (req, res) => {
    res.render("create_blog.ejs");
});

app.post("/your_blogs", (req, res) => {
    const title = req.body["title"];
    const content = req.body["content"];

    blogs.push([title, content]);

    console.log(blogs);

    res.render("your_blogs.ejs", {
        title : title,
        content : content 
    });
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});