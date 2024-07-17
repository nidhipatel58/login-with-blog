let express = require('express');
let route = express.Router();
let { postController } = require('../controller');

route.post('/create', postController.createPost);
route.get('/get', postController.getPosts);
route.get('/get/:id', postController.getPostById);
route.delete('/delete/:id', postController.deletePost);
route.put('/update/:id', postController.updatePost);

module.exports = route;