const mongoose = require('mongoose');

function initDatabase(){
    return mongoose.connect("mongodb://localhost:27017/project-sky")
}

module.exports = initDatabase;