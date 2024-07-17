const { postSchema } = require("../models");

let createPost = (body) => {
    console.log(body, "res");
    return postSchema.create(body);
}

let getPosts = () => {
    return postSchema.find();
}

let findPostById = (id) => {
    return postSchema.findById(id);
}

let deletePost = (id) => {
    return postSchema.findByIdAndDelete(id);
}

let updatePost = (id, body) => {
    return postSchema.findByIdAndUpdate(id, body);
}

module.exports = { createPost, getPosts, findPostById, deletePost, updatePost };