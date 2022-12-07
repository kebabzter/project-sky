const { getAll, createProject } = require('../services/projectService');

const projectController = require('express').Router();

projectController.get('/', async (req, res) => {
    const projects = await getAll();
    res.status(200).json(projects);
})

projectController.post('/', async (req, res) => {
    const data = req.body;
    try {
        data.owner = req.user._id
        console.log(req.user);
        // data.owner = '638cda7f832a309f7feb9455'
        const project = await createProject(data)
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = projectController;