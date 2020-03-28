import express from 'express';
import * as clusterControl from '../controllers/clustersController.js';

const clustersRouter = express.Router();

clustersRouter.get('/', clusterControl.list);

clustersRouter.put('/addCareer/:clusterid', clusterControl.addCareer, clusterControl.prepareCareerId)

clustersRouter.put('/removeCareer/:clusterid', clusterControl.deleteCareer)


export default clustersRouter;