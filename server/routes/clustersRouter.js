import express from 'express';
import list from '../controllers/clustersController.js';
const clustersRouter = express.Router();

clustersRouter.get('/', list);

export default clustersRouter;