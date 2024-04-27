const { DataTypes } = require('sequelize');
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      primaryKey: true, 
      type: DataTypes.UUID, // Tipo UUID para un identificador único
      defaultValue: DataTypes.UUIDV4, // Valor por defecto que será un UUID generado automáticamente
    }, 
    img: {
      type: DataTypes.STRING, // STRING para la URL de la imagen
    },
    name: {
      type: DataTypes.STRING, // Tipo STRING para el nombre del perro
      allowNull: false, // no puede ser nulo
    },
    height: {
      type: DataTypes.FLOAT, // Tipo FLOAT para la altura del perro (puede ser un número decimal)
    },
    weight: {
      type: DataTypes.FLOAT, // Tipo FLOAT para el peso del perro (puede ser un número decimal)
    },
    age: {
      type: DataTypes.INTEGER, // Tipo INTEGER para la edad del perro (número entero)
    },
    isActive: {
			    type: DataTypes.BOOLEAN,
			},
  });
};
