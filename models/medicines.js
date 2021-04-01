module.exports = (sequelize, DataTypes) => {
  const Medicines = sequelize.define('Medicines', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: sequelize.UUIDV4,
    //   primaryKey: true,
    //   allowNull: true
    // },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    usage: DataTypes.STRING,
    expDate: DataTypes.DATEONLY,
    volume: DataTypes.STRING,
    status: DataTypes.STRING
  })
  return Medicines
}
