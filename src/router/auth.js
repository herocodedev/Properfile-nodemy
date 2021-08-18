const express = require('express')
const router = express.Router()

const authControllers = require('../app/Controllers/AuthControllers')

router.post('/register', authControllers.index)
router.put('/:id', authControllers.edit)
router.delete('/:id', authControllers.delete)
router.post('/login', authControllers.login)





module.exports = router