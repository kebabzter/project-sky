const { Schema, Types, model } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i


const projectSchema = new Schema({
    title: {
        required: true,
        type: String,
        minlength: [4, 'Title must be at least 4 characters long']
    },
    description: {
        required: true,
        type: String,
        minlength: [20, 'Description must be at least 20 characters long']
    },
    imageUrl: {
        type: String, required: true, validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Image URL is not valid'
        }
    },
    owner: { type: Types.ObjectId, ref: 'User', required: true },
    // likeList: {type: [Types.ObjectId], ref:'User', default:[]}

})

const Project = model('Project', projectSchema)

module.exports = Project;