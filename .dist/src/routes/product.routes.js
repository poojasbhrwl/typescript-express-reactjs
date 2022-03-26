"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = __importDefault(require("../controllers/product")); // call product controller
const upload_middleware_1 = require("../middleware/upload.middleware"); // call upload function for image through multer
const productRoutes = (0, express_1.Router)();
const service = new product_1.default(); // create object for product controller
// route for create new product with image upload middleware
productRoutes.post('/', upload_middleware_1.upload.single('image'), (req, res) => {
    const image = req.file;
    let request = req.body;
    request.picture = image ? image.filename : undefined; // bind image with request
    // call create function of controller
    service.createProduct(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
// route for get all products under a particular restaurant
productRoutes.get('/:restaurantId', (req, res) => {
    let request = { restaurantId: req.params.restaurantId };
    // call list products function of controller
    service.listProduct(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
// route for update particular product
productRoutes.put('/:id', upload_middleware_1.upload.single('image'), (req, res) => {
    const image = req.file;
    let request = req.body;
    request.id = req.params.id;
    request.picture = image ? image.filename : undefined; // bind image with request
    // call update product function of controller
    service.updateProduct(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
// route for delete paticular product
productRoutes.delete('/:id', (req, res) => {
    let request = { id: req.params.id };
    // call delete product function of controller
    service.deleteProduct(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
exports.default = productRoutes;
