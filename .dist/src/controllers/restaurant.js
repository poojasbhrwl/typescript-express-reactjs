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
const restaurant_1 = require("../models/restaurant");
const restaurant_validation_1 = require("../validations/restaurant.validation");
class RestaurantService {
    constructor() {
        // create function for register new restaurant
        this.registerRestaurant = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const validate = yield restaurant_validation_1.restaurantValidation.registerRestaurantValidation(request); // validate request params
                let alreadyExist = yield restaurant_1.Restaurant.findOne({ name: validate.name }); // check already exists with same name
                if (alreadyExist && alreadyExist._id) {
                    response.status = 500;
                    response.error = { message: "Data Already exists" }; // return response if already exists
                }
                else {
                    const data = new restaurant_1.Restaurant(validate); // create object for restaurant
                    let restdata = yield data.save(); // save the data
                    response.restdata = restdata;
                }
            }
            catch (e) {
                response.status = 500;
                response.error = e;
            }
            return response; // return response
        });
        // function for list all restaurant with pagination
        this.listRestaurant = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const validate = yield restaurant_validation_1.restaurantValidation.listRestaurantValidation(request); // validate request params
                if (validate.limit && validate.page) {
                    let limit = validate.limit;
                    let offset = limit * (validate.page - 1);
                    var restdata = yield restaurant_1.Restaurant.find().skip(offset).limit(limit); // get all restaurant list with pagination
                }
                else {
                    restdata = yield restaurant_1.Restaurant.find(); // get all restaurant list
                }
                response.restdata = restdata;
            }
            catch (e) {
                response.status = 500;
                response.error = e;
            }
            return response; // return response
        });
        // function for update details of restaurant
        this.updateRestaurant = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = { status: 200 };
            try {
                const validate = yield restaurant_validation_1.restaurantValidation.updateRestaurantValidation(request); // validate request params
                yield restaurant_1.Restaurant.findOneAndUpdate({ _id: validate.id }, validate); // find and update
                let restdata = yield restaurant_1.Restaurant.findById(validate.id); // find update restaurant
                response.restdata = restdata;
            }
            catch (e) {
                console.log(e);
                response.status = 500;
                response.error = e;
            }
            return response; // return response
        });
    }
}
exports.default = RestaurantService;
