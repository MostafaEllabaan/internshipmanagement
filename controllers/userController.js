const posts = require('../models/User')

//get all user 
const get_users = async (req, res)=>{
    try{
        const users = await User.find();
        res.jason(users)
    }
    catch{
        res.status(400).jason({message: err})
    }
}

const create_user = async (req, res)=>{
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
}

module.exports = {
    get_users,
    create_user
}