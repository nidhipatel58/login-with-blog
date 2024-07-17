const { postService } = require("../services");

let createPost = async (req, res) => {
    try {
        console.log(req.body);
        let body = req.body;
        let post = await postService.createPost(body);

        res.status(200).json({
            message: "Post created successfully!",
            post
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let getPosts = async (req, res) => {
    try {
        console.log(req.body);
        let posts = await postService.getPosts();

        res.status(200).json({
            message: "Get all posts success",
            posts,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let getPostById = async (req, res) => {
    try {
        console.log(req.params);
        let { id } = req.params;
        let post = await postService.findPostById(id);

        res.status(200).json({
            message: "Get post success!",
            post,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let deletePost = async (req, res) => {
    try {
        console.log(req.params);
        let { id } = req.params;
        let deleted = await postService.deletePost(id);

        res.status(200).json({
            message: "Delete post success!",
            deleted,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

let updatePost = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let update = await postService.updatePost(id, body);
        console.log(update, "update");

        res.status(200).json({
            message: "Updated post success!!",
            update,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = { createPost, getPosts, getPostById, deletePost, updatePost };