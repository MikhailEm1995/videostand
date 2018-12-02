const Id = (DataTypes) => ({
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    unique: true,
    autoincrement: true,
    allowNull: false
  }
});

const Options = () => ({
  freezeTableName: true, timestamps: false
});

module.exports = {
  Id, Options
};
