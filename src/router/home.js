const express = require('express')
const router = express.Router()

const siteControllers = require('../app/Controllers/SiteControllers')

router.get('/', siteControllers.index)
router.post('/', siteControllers.show)



module.exports = router