module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: sequelize.UUIDV4,
    //   primaryKey: true,
    //   allowNull: true
    // },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    remarks: DataTypes.STRING,
    service: DataTypes.STRING
  })
  return Users
}
