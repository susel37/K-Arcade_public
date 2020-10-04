const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const myGames = require("./games.js")
const myLocations = require("./locations.js")

app.set("view engine", "ejs")

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    const games = myGames
    const locations = myLocations
    const genreFilter = "";
    res.render("game_list", {games, locations, genreFilter});
})

app.get("/genre/:genre", (req, res) => {
    const genreFilter = req.params.genre;
    res.render("game_list", {games: myGames, locations: myLocations, genreFilter});
})

app.get("/location/:district", (req, res) => {
    const locationFilter = req.params.district;
    const gameFilter = "";
    res.render("location_list", {games: myGames, locations: myLocations, locationFilter, gameFilter});
})

app.get("/game/:title", (req, res) => {
    const locationFilter = "";
    const gameFilter = req.params.title;
    res.render("location_list", {games: myGames, locations: myLocations, locationFilter, gameFilter});
})

app.get("/center/:name", (req, res) => {
    const name = req.params.name;
    res.render("arcade_info", {games: myGames, locations: myLocations, name});
})

app.get("/search", (req, res) => {
    const keyword = req.query.keyword;
    res.render("search", {games: myGames, locations: myLocations, keyword});
})


app.listen(process.env.PORT || 8080)