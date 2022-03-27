import medianRoutes from './routes/median.routes';
import { Router } from 'express';

const routes = Router();
// use median routes with url /median
routes.use('/',  medianRoutes);
  
export default routes