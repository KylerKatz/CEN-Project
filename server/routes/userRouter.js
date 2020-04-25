import * as userController from '../controllers/usersController.js';
import express from 'express';
const userRouter = express.Router();

userRouter.post('/', userController.create, userController.savef, userController.redir);

userRouter.get('/', userController.list);
userRouter.put('/Password', userController.update);
userRouter.put('/Teacher', userController.assign);
userRouter.put('/Delete', userController.deleteu);
userRouter.put('/Points', userController.updatePoints)
userRouter.put('/Career',userController.saveCluster)

export default userRouter;
