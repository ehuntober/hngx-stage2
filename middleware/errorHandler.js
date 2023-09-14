// errorHandler.js
function errorHandler(err, req, res, next) {
    console.error(err.stack);
  
    // Handle specific types of errors
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: 'Validation error', message: err.message });
    }
  
    // Handle other errors
    res.status(500).json({ error: 'Internal server error' });
  }
  
  module.exports = errorHandler;
  