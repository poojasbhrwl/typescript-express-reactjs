"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedianValidations = void 0;
const joi_1 = __importDefault(require("joi"));
class MedianValidation {
    constructor() {
        this.medianValidation = (body) => {
            const schema = joi_1.default.object().keys({
                number: joi_1.default.number().required().label('Value').min(1)
            });
            return schema.validate(body);
        };
    }
}
exports.MedianValidations = new MedianValidation();
