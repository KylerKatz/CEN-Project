import * as userController from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();

userRouter.post('/', userController.create, userController.redir);

userRouter.get('/', userController.list);
userRouter.put('/Password/', userController.update);
userRouter.put('/Teacher/', userController.assign);
userRouter.put('/Delete/', userController.deleteu);

export default userRouter;
