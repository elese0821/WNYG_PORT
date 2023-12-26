const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        content: String,
        postNum: Number,
        cate: String,
        // author: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User",
        // },
    },
    { collection: "posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };