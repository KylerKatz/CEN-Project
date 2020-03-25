import express from 'express';
import * as clusterControl from '../controllers/clustersController.js';

const clustersRouter = express.Router();

clustersRouter.get('/', clusterControl.list);

clustersRouter.post('/addCareer/:clusterid', clusterControl.addCareer)

export default clustersRouter;