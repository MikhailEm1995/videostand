const { DBConnectorMixin } = require('../DBConnector/index');

const DBHandler = (schemasDescriptions) => (handler) => {
  const obj = DBConnectorMixin(handler);

  Object.keys(schemasDescriptions).forEach((schema) => {
    obj[schema] = obj.getConnection()
      .import(...schemasDescriptions[schema]);
  });

  return obj;
};

module.exports = { DBHandler };
