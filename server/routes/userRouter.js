import * as userController from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();

//var userController 
userRouter.post("/", userController.create, userController.redir);

export default userRouter; 