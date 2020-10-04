const config = require("./config.js")
const mongoose = require('mongoose');
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});

const locationSchema = new mongoose.Schema({
    district: String,
    name: String,
    location: String,
    lal: Array,
    games: Array
});

const Location = mongoose.model("locations", locationSchema);

const list = [];

const arcadeCenters = Location.find()
.exec().then((found) => {
    found.forEach((item, index, array)=> {
        list.push(item);
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

module.exports = list;