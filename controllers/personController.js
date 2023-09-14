const Person = require('../models/personModel');


// CREATE a new person
exports.createPerson = async (req, res, next) => {
  try {
    const { name } = req.body;

    // Validate the request data
    if (!name) {
      return res.status(400).json({
        errorStatus: true,
        code: '--person/validation-error',
        message: 'Name is required.',
        statusCode: 400,
        data: null,
      });
    }

    const person = new Person({ name });
    await person.save();

    // Respond with success message and person data
    res.status(201).json({
      errorStatus: false,
      code: '--person/success',
      message: 'Person created successfully',
      statusCode: 201,
      data: {
        id: person._id,
        name: person.name,
      },
    });
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
