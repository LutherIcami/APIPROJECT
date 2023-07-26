const express = require('express');
const Sequelize=require('./models/User');
Sequelize.sync()
const app = express();
app.use(express.json());
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
 
// Connect to the database

 
// Middleware to parse incoming requests as JSON

 
// Routes
app.use('/api', userRoutes);
 
const PORT = 3400;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

