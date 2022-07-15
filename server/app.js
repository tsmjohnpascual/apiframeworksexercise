const express = require("express")

const players = require("./players")


const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the basketball API!")
})

app.get("/players", (req, res) => {

    res.sendFile(__dirname + "../client/players")

})










































module.exports = app