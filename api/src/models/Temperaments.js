const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperaments', {
    id: {
      primaryKey: true, 
      type: DataTypes.UUID, // Tipo UUID para un identificador único
      defaultValue: DataTypes.UUIDV4, // Valor por defecto que será un UUID generado automáticamente
    }, 
    name: {
      type: DataTypes.STRING, // Tipo STRING para el nombre del perro
      allowNull: false, // no puede ser nulo
    }
  });
};