const express = require('express');
const userController = require('../controllers/usercontrollers');
const router = express.Router();
const authenticateUser=require('../middleware/authenticateUser');
 
// Public routes
router.post('/register',userController.register);
router.post('/login',userController.login);
 
// Protected route
router.get('/users', authenticateUser, userController.getAllUsers);
 
module.exports = router;

