import * as userController from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();

userRouter.post("/", userController.validate, userController.create, userController.redir);

userRouter.put("/", userController.list);
userRouter.put("/Password/", userController.update);
userRouter.put("/Teacher/", userController.assign);
userRouter.put("/Delete/", userController.delete);

export default userRouter; 
