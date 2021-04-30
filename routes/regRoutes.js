const express = require("express");
const RegBlogger = require("../models/RegBlogger");
const router = express.Router();

// retrieve the signup form for blogger
// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

//SAVING BLOGGER'S INFORMATION TO THE DATABASE
router.post("/signup", async (req, res) => {
  try {
    const items = new RegBlogger(req.body);
    await items.save(()=>{
      res.redirect("/login")
    }); 
  } catch (err) {
    res.status(400).send("Ooops! Something went wrong.");
    console.log(err);
  }
});

module.exports = router;
