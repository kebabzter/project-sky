const { getAll, createProject, getById } = require('../services/projectService');
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

module.exports = projectController;