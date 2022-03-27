import { Router, Request, Response } from 'express';
import { MedianService } from '../controllers/median'
const medianRoutes = Router();

// route for get median of prime numbers
medianRoutes.post('/', (req: Request, res: Response) => {
    // call list median controller
    MedianService.getMedian(req.body).then(resp => {
        res.status(resp.status).json(resp)
    }).catch(e => {
        res.status(e.status).json(e)
    })
});

export default medianRoutes
