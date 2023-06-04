const express = require('express');
const contactControllers = require('../controllers/contacts');

const router = express.Router();

router.get('/success', contactControllers.contactSuccess);
router.post('/', contactControllers.projectsCreatePost);
router.get('/', contactControllers.projectsCreateGet);

module.exports = router;