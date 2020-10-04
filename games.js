const config = require("./config.js")
const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

const gameSchema = new mongoose.Schema({
    title: String,
    company: String,
    genre: String,
    image: String
});

const Game = mongoose.model("games", gameSchema);

const list = []

const myGames = Game.find()
.exec()
.then((found) => {
    found.forEach((item, index, array)=> {
        list.push(item);
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

module.exports = list;