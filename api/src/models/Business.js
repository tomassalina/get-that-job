const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('business', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
          isEmail: {
          msg: "Debe ser un email válido",}
      }
    },
    name:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    role: {
      type:DataTypes.STRING,
      defaultValue:'Recruiter'
  }
  },{
    timestamps:false
  }
  );
};
