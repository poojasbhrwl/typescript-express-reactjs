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
const products_1 = require("../models/products");
const product_validation_1 = require("../validations/product.validation");
class ProductService {
    constructor() {
        // function for create new product
        this.createProduct = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const validate = yield product_validation_1.ProductValidations.createProductValidation(request); // validate the request params
                let alreadyExist = yield products_1.Product.findOne({ name: validate.name, restaurantId: validate.restaurantId }); // check already exists with same name in particular restaurant
                if (alreadyExist && alreadyExist._id) {
                    response.status = 500;
                    response.error = { message: "Data Already exists" }; // if already exists retur response
                }
                else {
                    const data = new products_1.Product(validate); // create product object
                    let productData = yield data.save(); // save data
                    response.productData = productData;
                }
            }
            catch (e) {
                response.status = 500;
                response.error = e;
            }
            return response; // return response
        });
        // function for list all products under particular restaurant 
        this.listProduct = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const validate = yield product_validation_1.ProductValidations.listProductValidation(request); // validate reuest
                if (validate.restaurantId) {
                    var restdata = yield products_1.Product.find({ restaurantId: validate.restaurantId }).populate({
                        path: 'categoryId',
                        model: 'Category',
                        select: '_id name description'
                    }).exec(); // find data in particular restaurant
                }
                else {
                    restdata = yield products_1.Product.find(); // find all product
                }
                response.restdata = restdata;
            }
            catch (e) {
                response.status = 500;
                console.log(e);
                response.error = e;
            }
            return response; // return response
        });
        // function for update product details
        this.updateProduct = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const validate = yield product_validation_1.ProductValidations.updateProductValidation(request); // validate request
                yield products_1.Product.findOneAndUpdate({ _id: validate.id }, validate); // find and update product
                let restdata = yield products_1.Product.findById(validate.id); // get updated product
                response.restdata = restdata;
            }
            catch (e) {
                response.status = 500;
                response.error = { message: 'Data not found' };
            }
            return response; // return response
        });
        //  function for delete particular product
        this.deleteProduct = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const validate = yield product_validation_1.ProductValidations.deleteProductValidation(request); // validate request
                let restdata = yield products_1.Product.findOneAndDelete({ _id: validate.id }); // find and delete else return null
                response.restdata = restdata;
            }
            catch (e) {
                response.status = 500;
                response.error = { message: 'Data not found' };
            }
            return response; // return data
        });
    }
}
exports.default = ProductService;
