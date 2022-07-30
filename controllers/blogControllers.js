const Blog = require("../models/blog");

const blogGetAll = (req,res) => {
    Blog.find().sort({createdAt: -1})
        .then((blogs) => {
            res.render("home", {title: "home", blogs});
        })
        .catch((err) => console.log(err));
};

const blogGetCreate =  (req, res) => {
    res.render("create", {title: "create"});
};

const blogGetEdit = (req, res) => {
    const id = req.params.id;
    
    Blog.findById(id)
        .then((blog) => {
            res.render("edit", {title: "edit", blog});
        })
        .catch(err => console.log(err));
};

const blogGetSingle = (req, res) => {

    const id = req.params.id;

    Blog.findById(id)
        .then((blog) => {
            res.render("blogs", {title: "blogs", blog});
        })
        .catch((err) => {
            res.status(404);
            res.render("404", {title: "404"});
        }
        );

};

const blogPostCreate = (req, res) => {
    
    const blog = new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body
    });

    blog.save()
        .then((result) => console.log("Saved successfully"))
        .catch(err => console.log(err));

    res.redirect("/");
};

const blogDelete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({url: "/"});
        })
        .catch(err => console.log(err));
};

const blogPostEdit = (req, res) => {
    const id = req.params.id;

    const blog = req.body;

    Blog.findOneAndUpdate({_id: id},blog)
        .then(result =>  res.redirect("/"))
        .catch(err => console.log(err));
};

module.exports = {
    blogGetAll, 
    blogGetCreate,
    blogGetEdit,
    blogGetSingle,
    blogPostCreate,
    blogDelete,
    blogPostEdit
}