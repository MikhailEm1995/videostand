const { TABLES } = require('../constants/db.js');
const { Id, Options } = require('./_common.js');

const MediaInfo = [TABLES.MEDIA_INFO, (sequelize, DataTypes) => {
  return sequelize.define(TABLES.MEDIA_INFO,
    {
      ...Id(DataTypes),
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: {
        type: DataTypes.INTEGER(11),
        defaultValue: 0
      },
      type: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      }
    }, Options())
}];

const MediaOrder = [TABLES.MEDIA_ORDER, (sequelize, DataTypes) => {
  return sequelize.define(TABLES.MEDIA_ORDER, {
    ...Id(DataTypes),
    media_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, Options());
}];

const MediaState = [TABLES.MEDIA_STATE, (sequelize, DataTypes) => {
  return sequelize.define(TABLES.MEDIA_STATE, {
    ...Id(DataTypes),
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    media_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
  }, Options());
}];

const MediaStates = [TABLES.MEDIA_STATES, (sequelize, DataTypes) => {
  return sequelize.define(TABLES.MEDIA_STATES, {
    ...Id(DataTypes),
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, Options());
}];

const MediaTypes = [TABLES.MEDIA_TYPES, (sequelize, DataTypes) => {
  return sequelize.define(TABLES.MEDIA_TYPES,
    {
      ...Id(DataTypes),
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, Options());
}];

module.exports = {
  MediaInfo,
  MediaOrder,
  MediaState,
  MediaStates,
  MediaTypes
};
