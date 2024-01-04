const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        content: String,
        postNum: Number,
        password: String,
        cate: String,
    },
    { collection: "posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };