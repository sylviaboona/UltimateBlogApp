const express = require('express');
const router = express.Router();


//REnders the login page for AO
router.get('/login', (req, res) => {
    res.render('login');
  }); 

//PROCESS THE LOG IN INFORMATION SUBMITTED
//Checking a user and asigning them a session, 
router.post('/login', (req,res) =>{
res.redirect('/bloggerDash')
})



module.exports = router;