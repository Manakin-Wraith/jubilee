const jwt = require('jsonwebtoken');

// Function to generate JWT token
exports.generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });
};
