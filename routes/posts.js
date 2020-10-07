const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postController')

//get all the post
router.get('/', postsController.all_posts);

//post a post
router.post('/', postsController.create_post);

//get specific posts
router.get('/:postId', postsController.get_post);

//delete post
router.delete('/:postId', postsController.delete_post);



module.exports = router;