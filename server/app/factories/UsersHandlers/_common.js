const { DBHandler } = require('../DBHandler/index');
const userSchemasDescriptions = require('../../schemas/users');

module.exports = DBHandler(userSchemasDescriptions);
