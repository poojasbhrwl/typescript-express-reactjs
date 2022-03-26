"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    restaurantId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Restaurant", required: true },
    name: { type: String, required: true },
    picture: { type: String, required: false },
    price: { type: Number, required: true },
    categoryId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Categories", required: true }
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)('Product', ProductSchema);