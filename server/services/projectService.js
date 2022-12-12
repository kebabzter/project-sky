const Project = require("../models/Project")

async function getAll() {
    return await Project.find({})
}

async function getById(id) {
    return await Project.findById(id);
}

async function editProject(id, data){
    try {
        return await Project.findByIdAndUpdate(id, {...data}, {runValidators: true})
    } catch (error) {
        return error;
    }
}

async function getByUserId(_id){
    return await Project.find({owner: _id})
}

async function deleteProject(id){
    await Project.findByIdAndRemove(id);
}

async function createProject(data){
    try {
        return await Project.create({...data})
    } catch (error) {
        console.log(error);
        return error
    }
}

module.exports = {
    getAll,
    getById,
    editProject,
    deleteProject,
    createProject,
    getByUserId
}