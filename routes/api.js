const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

// CREATE a new person
router.post('/', personController.createPerson);

// READ a person by ID
router.get('/:id', personController.getPersonById);

// READ a list of all persons
router.get('/', personController.getAllPersons);

// UPDATE a person by ID
router.put('/:id', personController.updatePersonById);

// DELETE a person by ID
router.delete('/:id', personController.deletePersonById);

module.exports = router;
