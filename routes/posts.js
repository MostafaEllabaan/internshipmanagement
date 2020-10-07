const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

//get all the post
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.jason(posts);
    }
    catch(err){
        res.status(400).jason({message: err });
    }
})

//post a post
router.post('/', async (req, res)=>{
   const post = new Post({
       title : req.body.title,
       author : req.body.author,
       year : req.body.year,
       url : req.body.url,
       venue : req.body.venue,
       abstract : req.body.abstract
   });
   try{
       const savedPost = await post.save();
       res.jason(savedPost);
   }
   catch(err){
        res.status(400).jason({message: err});
   }
});

//get specific posts
router.get('/:postId', async(req, res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        res.jason(post);
    }catch(err){
         res.status(400).jason({message: err});
    }
});

//delete post
router.delete('/:postId', async(req, res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId });
        res.jason(post);
    }catch(err){
         res.status(400).jason({message: err});
    }
});

//update post
router.patch('/:postId', async(req, res)=>{
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId },
            {$set: { title : req.body.title,
                    author : req.body.author,
                    year : req.body.year,
                    url : req.body.url,
                    venue : req.body.venue,
                    abstract : req.body.abstract
            }}
        );
        res.jason(post);
    }catch(err){
         res.status(400).jason({message: err});
    }
});

module.exports = router;