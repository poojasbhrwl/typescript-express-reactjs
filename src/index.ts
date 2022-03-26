import mainRoutes from './routes/main.routes';
import { Router } from 'express';

const routes = Router();
// use main routes with url /main
routes.use('/',  mainRoutes);
  
export default routes