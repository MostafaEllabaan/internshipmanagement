const express = require('express');
const router = express.Router();
const User = require('../models/User');

//get all the user
router.get('/', async (req, res)=>{
    try{
        const users = await User.find();
        res.jason(users)
    }
    catch{
        res.status(400).jason({message: err})
    }
})

//create new user
router.post('/', async (req, res)=>{
   const user = new User({
        type: res.body.type,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
   });
   try{
       const savedPost = await post.save();
       res.jason(savedPost);
   }
   catch(err){
        res.status(400).jason({message: err});
   }
});

module.exports = router;
