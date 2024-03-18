const { body, validationResult } = require('express-validator');

exports.validateRegistration = [
  // Validation rules for the username field
  body('username').isLength({ min: 5 }),

  // Validation rules for the password field
  body('password').isLength({ min: 5 }),

  // Custom middleware function to handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
