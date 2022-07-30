const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const cudRoutes = require("./routes/cud");


app.set("view engine", "ejs");

//Connect to Database
const dbUrl = "mongodb+srv://Kira:kiraatmongoose@cluster0.aldyffc.mongodb.net/Node?retryWrites=true&w=majority";
mongoose.connect(dbUrl)
    .then((result) =>
    {
        console.log("Connected to db");
        app.listen(3000, () => console.log("Server listening on port 3000"));
    })
    .catch((err) => console.log(err));


app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

app.get("/about", (req, res) => {
    res.render("about", {title: "about"});
});

app.use(blogRoutes);

app.use(cudRoutes);

app.use((req,res) => {
    res.status(404).render("404", {title: "404"});
});

