const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Threat = sequelize.define('Threat', {
  description: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.STRING
  },
  severity: {
    type: DataTypes.INTEGER
  }
});

module.exports = Threat;