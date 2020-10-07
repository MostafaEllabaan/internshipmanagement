const posts = require('../models/Posts')

//get all the post
const all_posts =  async (req, res)=>{
    try{
        const posts = await Post.find();
        res.jason(posts);
    }
    catch(err){
        res.status(400).jason({message: err });
    }
}

//create a post 
const create_post = async (req, res)=>{
   const post = new Post(req.body);
   try{
       const savedPost = await post.save();
       res.jason(savedPost);
   }
   catch(err){
        res.status(400).jason({message: err});
   }

   post.save()
    .then((result)=>{
        res.redirect('./posts')
    })
    .catch((err)=>{
        console.log(err);
    })
}

//get specific post 
const get_post = async (req, res)=>{
   const post = new Post(req.body);
   try{
       const savedPost = await post.save();
       res.jason(savedPost);
   }
   catch(err){
        res.status(400).jason({message: err});
   }

   post.save()
    .then((result)=>{
        res.redirect('./posts')
    })
    .catch((err)=>{
        console.log(err);
    })
}

//delete post 
//in frontend  fetch endpoint with method: 'DELETE'
const delete_post = async(req, res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId });
        res.jason(post);
    }catch(err){
         res.status(400).jason({message: err});
    }
}

module.exports = {
    all_posts,
    create_post,
    get_post,
    delete_post
}