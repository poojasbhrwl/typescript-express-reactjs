"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = __importDefault(require("../controllers/category"));
const categoryRoutes = (0, express_1.Router)();
const service = new category_1.default();
// route for get all categories
categoryRoutes.get('/', (req, res) => {
    let request = { page: req.query.page, limit: req.query.limit }; // create object for request
    // call list category controller
    service.listCategory(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
// route for create new categories
categoryRoutes.post('/', (req, res) => {
    let request = req.body;
    // call create category controller
    service.createCategory(request).then(resp => {
        res.json(resp).status(resp.status);
    }).catch(e => {
        res.json(e).status(e.status);
    });
});
exports.default = categoryRoutes;
