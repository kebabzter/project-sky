const authController = require('express').Router();
const { body, validationResult } = require('express-validator')

const { register, login, logout } = require('../services/userService');
const { parseError } = require('../util/parser');

authController.get('/', async (req, res) => {
    const user = req.user;
    if (user) {
        res.status(200).json(user)
    }
})

authController.post('/register',
    // body('email').isEmail().withMessage('Invalid email'),
    // body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    async (req, res) => {
        // try {
        //     const { errors } = validationResult(req);
        //     if (errors.length > 0) {
        //         throw errors;
        //     }
        //     const token = await register(req.body.username, req.body.email, req.body.password);
        //     res.json(token);
        // } catch (error) {
        //     res.status(400).json({error:error.message})
        // }
        try {
            const token = await register(req.body.username, req.body.email, req.body.password);
            res.status(201).json(token);
        } catch (error) {
            console.log(error);
            res.status(400).json({error:error.message})
        }
        res.end();
    })

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json(token);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    res.end();
})

authController.get('/logout', async (req, res) => {
    const token = req.token;
    await logout(token);
    res.status(204).end();
})

module.exports = authController;