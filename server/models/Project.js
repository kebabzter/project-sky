const {Schema, Type , model} = require('mongoose');

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

    },
    category: {
        
    }
})

const Project = model('Project', projectSchema)

module.exports = Project;