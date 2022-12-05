const router = require('express').Router();
const authController = require('./controllers/authController')

router.get('/', (req, res) => {
    let token = req.headers['X-Authorization'] | 'nothing'
    res.json(token)
})

router.use('/users', authController);
    
module.exports = router;