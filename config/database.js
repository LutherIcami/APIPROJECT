const { Sequelize } = require('sequelize');

// Replace 'your-database-name', 'your-username', 'your-password', and 'your-host' with your actual MySQL database credentials
const sequelize = new Sequelize('your-database-name', 'your-username', 'your-password', {
  host: 'your-host',
  dialect: 'mysql',
});

module.exports = sequelize;
