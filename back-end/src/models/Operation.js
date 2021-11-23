const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('operation', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amounth: {
      type: DataTypes.INTEGER,
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.ENUM("entry","egress"),
        allowNull: false
    }
  });
};
