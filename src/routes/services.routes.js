const express = require('express');
const servicesControllers = require('../controllers/services');

const router = express.Router();

router.get('/', servicesControllers.projectIndex);
router.post('/', servicesControllers.projectsCreatePost);
router.get('/create', servicesControllers.projectsCreateGet);

module.exports = router;