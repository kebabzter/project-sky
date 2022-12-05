const { getAll, createProject } = require('../services/projectService');

const projectController = require('express').Router();

projectController.get('/', async (req, res) => {
    const projects = await getAll();
    res.status(200).json(projects);
})

projectController.post('/', async (req, res) => {
    const data = req.body;
    console.log(req.user);
    try {
        data.owner = req.user._id
        const project = await createProject(data)
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = projectController;