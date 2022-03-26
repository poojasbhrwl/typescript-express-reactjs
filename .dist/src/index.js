"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_routes_1 = __importDefault(require("./routes/restaurant.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const express_1 = require("express");
const routes = (0, express_1.Router)();
// use restaurant routes with url /restaurant
routes.use('/restaurant', restaurant_routes_1.default);
// use product routes with url /product
routes.use('/product', product_routes_1.default);
// use category routes with url /category
routes.use('/category', category_routes_1.default);
exports.default = routes;
