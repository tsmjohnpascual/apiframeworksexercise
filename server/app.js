const express = require("express")
const players = require("./players")

const data = require("./players")


const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the basketball API!")
})

app.get("/players", (req, res) => {

    // res.sendFile(__dirname + "/../client/players.html")

    let allPlayers = data

    let shootingGuards = []

    for (let p in allPlayers) {
         if (allPlayers[p].position == "Shooting Guard") {
             shootingGuards.push(allPlayers[p])
         }
        
    }

    res.json(shootingGuards)

})












































module.exports = app