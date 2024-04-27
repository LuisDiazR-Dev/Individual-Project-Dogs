const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo
  const Temperament = sequelize.define('Temperament', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    }, 
    name: {
      type: DataTypes.STRING, // Tipo STRING para el nombre del temperamento
      allowNull: false, // Hacer que el nombre del temperamento sea obligatorio
    }
  });

  return Temperament; // Devolvemos el modelo definido
};