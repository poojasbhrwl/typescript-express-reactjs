import { Router, Request, Response } from 'express';
import MedianService from '../controllers/median'
const medianRoutes = Router();
const service = new MedianService();

// route for get all categories
medianRoutes.get('/', (req: Request, res: Response) => {
    let request: any = {page: req.query.page, limit: req.query.limit}  // create object for request
    // call list median controller
    service.listMedian(request).then(resp => {
        res.json(resp).status(resp.status)
    }).catch(e => {
        res.json(e).status(e.status)
    })
});

export default medianRoutes
