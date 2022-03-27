"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const median_routes_1 = __importDefault(require("./routes/median.routes"));
const express_1 = require("express");
const routes = (0, express_1.Router)();
// use median routes with url /median
routes.use('/', median_routes_1.default);
exports.default = routes;
