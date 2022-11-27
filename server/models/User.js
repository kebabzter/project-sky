const {Schema, Type , model} = require('mongoose');

const userSchema = new Schema({
    username: {
        required: true,
        type: String,
        minlength: [4, 'Username should have at least 4 characters long'],
        maxlength: [12, 'Username cannot have more than 10 characters long'],
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    hashedPassword: {
        required: true,
        type: String,
        minlength: [6, 'Password should have at least 6 characters long'],
        maxlength: [14, 'Password cannot have more than 12 characters long'],
    }
});

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;