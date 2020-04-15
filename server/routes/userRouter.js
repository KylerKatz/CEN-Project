import * as userController from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();



//var userController 
userRouter.post("/", userController.validate, userController.create, userController.redir);
userRouter.put("/Password/", userController.update);
userRouter.put("/Teacher/", userController.assign);
userRouter.put("/Delete/", userController.delete);

export default userRouter; 
