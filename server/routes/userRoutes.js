import express from 'express';
const userRouter = express.Router();


var userController = require('../controllers/usersController.js');

userRouter.post("/Signup", userController.post);

export default userRouter; 