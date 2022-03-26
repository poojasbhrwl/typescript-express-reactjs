"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("../models/categories");
class CategoryService {
    constructor() {
        // function for list all categories
        this.listCategory = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                var categoryData = yield categories_1.Category.find(); // get all categories
                response.categoryData = categoryData;
            }
            catch (e) {
                response.status = 500;
                response.error = e;
            }
            return response; // return response to router
        });
        // function for create new categories
        this.createCategory = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const data = new categories_1.Category(request); // create category object
                let categoryData = yield data.save(); // save data
                response.categoryData = categoryData;
            }
            catch (e) {
                response.status = 500;
                response.error = e;
            }
            return response; // return created object or error
        });
    }
}
exports.default = CategoryService;
