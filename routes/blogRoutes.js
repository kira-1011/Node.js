const express = require("express");

const Blog = require("../models/blog");

const blogController = require("../controllers/blogControllers");

const router = express.Router();

console.log(router);

router.get("/", blogController.blogGetAll);

router.get("/blogs/create", blogController.blogGetCreate);

router.get("/blogs/edit/:id", blogController.blogGetEdit);

router.get("/blogs/:id", blogController.blogGetSingle);

module.exports = router;