import express from 'express';
import * as clusterControl from '../controllers/clustersController.js';

const clustersRouter = express.Router();

clustersRouter.get('/', clusterControl.list);

clustersRouter.get('/Icons', clusterControl.listicon);

clustersRouter.put('/addCareer/:clusterid', clusterControl.addCareer, clusterControl.prepareCareerId)

clustersRouter.put('/removeCareer/:clusterid', clusterControl.deleteCareer)

clustersRouter.put('/updateCareer/:clusterid', clusterControl.updateCareer)

clustersRouter.post('/addCluster', clusterControl.addCluster)

clustersRouter.delete('/deleteCluster/:clusterid', clusterControl.deleteCluster)

clustersRouter.put('/updateClusterId/:clusterid', clusterControl.updateClusterId)

export default clustersRouter;