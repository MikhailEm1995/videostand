const mysql = require('mysql');
const { makeMixin } = require('../../../utils/objectCreation.js');

const DBConnector = () => {
  let db;
  let connection;

  return {
    connect({ DB_NAME, DB_HOST, DB_USERNAME, DB_PASSWORD }) {
      db = DB_NAME;
      connection = mysql.createConnection({
        host: DB_HOST,
        username: DB_USERNAME,
        password: DB_PASSWORD,
        multipleStatements: true
      });
      return this;
    },
    getDB() {
      return db;
    },
    getConnection() {
      return connection;
    },
    killConnection() {
      connection.end();
      connection = null;
      return this;
    }
  };
};

module.exports = {
  DBConnector,
  DBConnectorMixin: makeMixin(DBConnector())
};
