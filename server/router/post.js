const express = require("express");
const router = express.Router();

// 스키마 만들기
const { Post } = require("../Model/Post.js")
const { Counter } = require("../Model/Counter.js");
// const { User } = require("../model/User.js");

// 글 쓰기
router.post("/write", (req, res) => {
    let temp = {
        content: req.body.content,
        cate: req.body.cate,
        password: req.body.password,
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum; // 번호 추가

            const BlogWrite = new Post(temp);
            BlogWrite
                .save()
                .then(() => {
                    Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
                        res.status(200).json({ success: true });
                    })
                })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

// 글목록
router.post("/list", (req, res) => {
    const path = req.body.path;

    Post.find({ cate: path })
        .sort({ createdAt: -1 })
        .limit(20)
        .then((result) => {
            res.status(200).json({ success: true, postList: result });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});

router.post("/delete", (req, res) => {
    Post
        .deleteOne({ postNum: req.body.postNum })
        .exec()
        .then(() => {
            res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })

})

router.post("/modify", (req, res) => {
    console.log(req.body)
    let temp = {
        content: req.body.content,
    }
    Post
        .updateOne({ postNum: req.body.postNum }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })

})

module.exports = router;