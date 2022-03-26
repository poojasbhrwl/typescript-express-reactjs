"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const joi_1 = __importDefault(require("joi"));
class ProductValidation {
    constructor() {
        this.createProductValidation = (body) => {
            const schema = joi_1.default.object().keys({
                name: joi_1.default.string().required().label('Name'),
                picture: joi_1.default.string().optional().label('Picture'),
                restaurantId: joi_1.default.string().required().label('Restaurant'),
                categoryId: joi_1.default.string().required().label('Category'),
                price: joi_1.default.number().optional().label('Price')
            });
            return schema.validateAsync(body);
        };
        this.listProductValidation = (body) => {
            const schema = joi_1.default.object().keys({
                restaurantId: joi_1.default.string().optional().label('Restaurant')
            });
            return schema.validateAsync(body);
        };
        this.updateProductValidation = (body) => {
            const schema = joi_1.default.object().keys({
                id: joi_1.default.string().required().label('Id'),
                name: joi_1.default.string().optional().label('Name'),
                picture: joi_1.default.string().optional().label('Picture'),
                restaurantId: joi_1.default.string().optional().label('Restaurant'),
                categoryId: joi_1.default.string().optional().label('Category'),
                price: joi_1.default.number().optional().label('Price')
            });
            return schema.validateAsync(body);
        };
        this.deleteProductValidation = (body) => {
            const schema = joi_1.default.object().keys({
                id: joi_1.default.string().optional().label('ProductId')
            });
            return schema.validateAsync(body);
        };
    }
}
exports.ProductValidations = new ProductValidation();
