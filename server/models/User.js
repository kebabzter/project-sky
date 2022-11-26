const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        // minlength: [5, 'Username should be at least 5 characters'],
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    password: {
        type: String,
        required: true,
        // minlength: [5, 'Password should be at least 5 characters'],
    }
})
userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
    .then((hash) =>{
         this.password = hash
         return next()
    })
})
const User = new mongoose.model('User', userSchema);
module.exports = User;