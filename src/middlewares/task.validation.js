const { check } = require('express-validator');

const validationText = [
  check('text')
    .exists()
    .withMessage(`Object must contain "text" field`)
    .isString()
    .withMessage('Text must be a string')
    .trim()
    .notEmpty()
    .withMessage('Text must be not empty')
];

module.exports = {
  validationText
};
