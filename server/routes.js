const router = require('express').Router();
const authController = require('./controllers/authController');
const projectController = require('./controllers/projectController');

router.get('/', (req, res) => {
    let token = req.headers['X-Authorization'] | 'nothing'
    res.json(token)
})

router.use('/users', authController);
router.use('/projects', projectController)
    
module.exports = router;