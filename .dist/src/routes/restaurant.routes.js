"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_1 = __importDefault(require("../controllers/restaurant")); // call reataurant controller
const upload_middleware_1 = require("../middleware/upload.middleware"); // call upload function for image through multer
const restaurantRoutes = (0, express_1.Router)();
const service = new restaurant_1.default(); // create object for restaurant controller
// route for create restaurant
restaurantRoutes.post('/', upload_middleware_1.upload.single('image'), (req, res) => {
    const image = req.file;
    let request = req.body;
    request.picture = image ? image.filename : undefined; // add image param to req
    request.opening = typeof (request.opening) == 'string' ? JSON.parse(request.opening) : request.opening; // validate opening param
    // call register function
    service.registerRestaurant(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
// route for get all list restaurant
restaurantRoutes.get('/', (req, res) => {
    let request = { page: req.query.page, limit: req.query.limit };
    // call list function
    service.listRestaurant(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
// route for update restaurant details by id
restaurantRoutes.put('/:id', upload_middleware_1.upload.single('image'), (req, res) => {
    const image = req.file;
    let request = req.body;
    request.id = req.params.id;
    request.picture = image ? image.filename : undefined; // add image param to req
    request.opening = typeof (request.opening) == 'string' ? JSON.parse(request.opening) : request.opening; // validate opening param
    // call update function
    service.updateRestaurant(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
exports.default = restaurantRoutes;
