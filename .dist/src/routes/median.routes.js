"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const median_1 = require("../controllers/median");
const medianRoutes = (0, express_1.Router)();
// route for get median of prime numbers
medianRoutes.post('/', (req, res) => {
    // call list median controller
    median_1.MedianService.getMedian(req.body).then(resp => {
        res.status(resp.status).json(resp);
    }).catch(e => {
        res.status(e.status).json(e);
    });
});
exports.default = medianRoutes;
