
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
// const port = process.env.PORT || 5050;
const port = 5050;
const config = require("./config/key.js");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});