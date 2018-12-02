const Sequelize = require('sequelize');
const { makeMixin } = require('../../../../utils/objectCreation.js');
const { DEV, PROD } = require('../../constants/db.js');

const sequelize = new Sequelize(
  DEV.DB_NAME, DEV.DB_USERNAME, DEV.DB_PASSWORD, {
    host: DEV.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

sequelize.authenticate();

const DBConnector = () => {
  const db = DEV.DB_NAME;
  const connection = sequelize;

  return {
    getDB() {
      return db;
    },
    getConnection() {
      return connection;
    },
    killConnection() {
      connection.close();
      return this;
    }
  };
};

module.exports = {
  DBConnector,
  DBConnectorMixin: makeMixin(DBConnector())
};
