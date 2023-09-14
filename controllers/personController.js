const Person = require('../models/personModel');

// CREATE a new person
exports.createPerson = async (req, res, next) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

// READ a person by ID
exports.getPersonById = async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

// READ a list of all persons
exports.getAllPersons = async (req, res, next) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

// UPDATE a person by ID
exports.updatePersonById = async (req, res, next) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

// DELETE a person by ID
exports.deletePersonById = async (req, res, next) => {
  try {
    const deletedPerson = await Person.findByIdAndRemove(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};
