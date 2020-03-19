import * as userController from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();

//var userController 
userRouter.post("/SignupComplete", userController.create);

export default userRouter; 