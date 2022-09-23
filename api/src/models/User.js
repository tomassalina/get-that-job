const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
          isEmail: {
          msg: "Debe ser un email válido",}
      }
    },
    fullname:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    role: {
      type:DataTypes.STRING,
      defaultValue:'Profesional'
  }
  },{
    timestamps:false
  }
  );
};
