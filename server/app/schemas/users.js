const { TABLES } = require('../../constants/db.js');
const { Id, Options } = require('./_common.js');

const Users = [TABLES.USERS, (sequelize, DataTypes) => {
  return sequelize.define(TABLES.USERS, {
    ...Id(DataTypes),
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}];

module.exports = { Users };
