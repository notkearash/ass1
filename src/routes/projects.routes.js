const express = require('express');
const projectControllers = require('../controllers/projects');

const router = express.Router();

router.get('/', projectControllers.projectIndex);
router.post('/', projectControllers.projectsCreatePost);
router.get('/create', projectControllers.projectsCreateGet);

module.exports = router;