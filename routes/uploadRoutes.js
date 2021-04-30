const express = require("express");
const router = express.Router();
const BlogUpload = require("../models/BlogUpload");

router.get("/blogUpload", (req, res) => {
    res.render("uploadBlog");
});

//SAVING BLOGGER'S UPLOADED CONTENT TO THE DATABASE
router.post("/blogUpload", async (req, res) => {
    try {
      const blogUploads = new BlogUpload(req.body);
      await blogUploads.save(() => {
        res.redirect("/bloggerDash");
      });
    } catch (err) {
      res.status(400).send("Ooops! Something went wrong!");
      console.log(err);
    }
});


router.get("/bloggerDash", async (req, res) => {
  try {
    let items = await BlogUpload.find()
    res.render("bloggerDash", {blogs: items,});
  } catch (err) {
    res.status(400).send("Ooops! Couldnt find items in database!");
  }
});
//DELETING A BLOD POST PRODUCT FROM THE DATABASE
router.post("/deleteBlog", async (req, res) => {
    try {
      await BlogUpload.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (err) {
      res.status(400).send("Oooops! Cant delete item!");
    }
});

//UPDATING A BLOG IN THE DATABASE
//Load the blog with a given id
router.get("/updateBlog/:id", async (req, res) => {
    try {
        const updateBlog = await BlogUpload.findOne({_id: req.params.id});
        res.render("updateBlog", { blog: updateBlog });
    } catch (err) {
      res.status(400).send("Unable to find item in the database");
    }
});
//Post the updated bloga back to the database
//and show the update on the bloggers dashboard
router.post("/updateBlog", async (req, res) => {
    try {
      await BlogUpload.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect("/bloggerDash");
    } catch (err) {
      res.status(404).send("Oooops! Update Failed. Try again");
    }
});



module.exports = router;
