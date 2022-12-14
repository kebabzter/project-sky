const { findById } = require('../models/Project');
const User = require('../models/User');
const { getAll, createProject, getById, getByUserId, editProject, deleteProject } = require('../services/projectService');
const { getUserById } = require('../services/userService');

const projectController = require('express').Router();

projectController.get('/', async (req, res) => {
    const projects = await getAll();
    for(let project of projects){
        let id = project.owner;
        project.owner = await getUserById(id);
    }
    res.status(200).json(projects);
})

projectController.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const project = await getById(id);
        const owner = await getUserById(project.owner);
        project.owner = owner
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json('Invalid project ID')
    }
})

projectController.put('/:id', async (req,res) => {
    const id = req.params.id;
    const data= req.body;
    const project = await getById(id);
    const owner = await getUserById(project.owner);
    try {
        if (req?.user._id == project.owner._id) {
            await editProject(id, data);
            const newProject = await getById(id);
            newProject.owner = owner;
            res.status(200).json(newProject);
        }else{
            throw new Error('You are not the owner of this project!')
        }
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

projectController.post('/', async (req, res) => {
    const data = req.body;
    try {
        data.owner = req.user._id
        const project = await createProject(data)
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

projectController.delete('/:id', async(req ,res) => {
    const id = req.params.id;
    const project = await getById(id)
    if (project.owner._id == req.user._id) {
        await deleteProject(id);
        res.status(200).json('Deleted project successfully');
    }else{
        res.status(400).json({error: 'You are not the owner of this project!'})
    }
})

module.exports = projectController;