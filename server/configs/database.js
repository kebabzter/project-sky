const mongoose = require('mongoose');

function connectToDB(){
    return mongoose.connect('mongodb://0.0.0.0:27017/project-cloudy')
}

module.exports = connectToDB;