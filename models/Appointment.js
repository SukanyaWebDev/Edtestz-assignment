const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Appointment = sequelize.define('Appointment', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Appointment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Appointment, { foreignKey: 'userId' });

module.exports = Appointment;
