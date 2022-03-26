"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
const mongoose_1 = require("mongoose");
const RestaurantSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    picture: { type: String, required: false },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    pin: { type: String, required: true },
    opening: { type: Array, required: true }
}, { timestamps: true });
exports.Restaurant = (0, mongoose_1.model)('Restaurant', RestaurantSchema);
