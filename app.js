const express = require('express')
let app = express()
//const GoogleHome = require("google-home-push");

// Pass the name or IP address of your device
//const myHome = new GoogleHome("192.168.1.5");

app.get("/", (req, res) => {
    const {msg} = req.query;
    console.log(msg)
})

app.listen(5000);