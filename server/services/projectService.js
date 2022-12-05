const Project = require("../models/Project")

async function getAll() {
    return Project.find({})
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

async function deleteProject(id){
    await Project.findByIdAndRemove(id);
}

async function createProject(data){
    try {
        return await Project.create({...data})
    } catch (error) {
        return error
    }
}

module.exports = {
    getAll,
    getById,
    editProject,
    deleteProject,
    createProject
}