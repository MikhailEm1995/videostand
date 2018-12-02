const { DBHandler } = require('../DBHandler/index');
const mediaSchemasDescriptions = require('../../schemas/media');

module.exports = DBHandler(mediaSchemasDescriptions);
