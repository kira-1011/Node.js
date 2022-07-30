const express = require("express");

const Blog = require("../models/blog");

const blogController = require("../controllers/blogControllers");

const router = express.Router();

router.post("/create", blogController.blogPostCreate);

router.delete("/delete/:id", blogController.blogDelete);

router.post("/edit/:id", blogController.blogPostEdit);

module.exports = router;