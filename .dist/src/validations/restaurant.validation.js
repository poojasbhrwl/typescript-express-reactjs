"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantValidation = void 0;
const joi_1 = __importDefault(require("joi"));
class RestaurantValidation {
    constructor() {
        this.registerRestaurantValidation = (body) => {
            const schema = joi_1.default.object().keys({
                name: joi_1.default.string().required().label('Name'),
                picture: joi_1.default.string().optional().label('Picture'),
                address: joi_1.default.string().required().label('Address'),
                city: joi_1.default.string().required().label('City'),
                country: joi_1.default.string().required().label('Country'),
                pin: joi_1.default.number().optional().label('Pin'),
                opening: joi_1.default.any().required().label('Opening hours')
            });
            return schema.validateAsync(body);
        };
        this.listRestaurantValidation = (body) => {
            const schema = joi_1.default.object().keys({
                page: joi_1.default.string().optional().label('Page'),
                limit: joi_1.default.string().optional().label('Limit')
            });
            return schema.validateAsync(body);
        };
        this.updateRestaurantValidation = (body) => {
            const schema = joi_1.default.object().keys({
                id: joi_1.default.string().required().label('Id'),
                name: joi_1.default.string().optional().label('Name'),
                picture: joi_1.default.string().optional().allow('').label('Picture'),
                address: joi_1.default.string().optional().label('Address'),
                city: joi_1.default.string().optional().label('City'),
                country: joi_1.default.string().optional().label('Country'),
                pin: joi_1.default.number().optional().label('Pin'),
                opening: joi_1.default.any().optional().label('Opening hours')
            });
            return schema.validateAsync(body);
        };
    }
}
exports.restaurantValidation = new RestaurantValidation();
