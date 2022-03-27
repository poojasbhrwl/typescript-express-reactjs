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
exports.MedianService = void 0;
const median_validation_1 = require("../validations/median.validation");
const logs_1 = require("../middleware/logs");
class MedianServices {
    constructor() {
        /**
         *
         * this function helps to calculate median(s) of prime number of n
         * @param request = { number : n}
         * @returns response = { status: status, error: {}, medianData: []}
         */
        this.getMedian = (request) => __awaiter(this, void 0, void 0, function* () {
            const response = {};
            try {
                const validation = yield median_validation_1.MedianValidations.medianValidation(request); // validates input request
                const { number: number } = request;
                if (validation.error) {
                    response.status = 400;
                    response.error = validation.error;
                }
                else {
                    response.status = 200;
                    var medianData = [];
                    if (number == 1) {
                        medianData.push(0);
                    }
                    else {
                        var primeData = yield findPrime(number); // get prime numbers for (0 - number)
                        medianData = yield findMedian(primeData); // get medians of prime numbers
                    }
                    response.medianData = medianData;
                }
                return response; // return response to router
            }
            catch (e) {
                logs_1.logsData.writeLogs({ service: 'getMedian', err: e, date: new Date() }); // please check debug.logs file for exceptions
                response.status = 500;
                response.error = e;
            }
        });
    }
}
/**
 *
 * helps to find prime number for 0 to number
 * @param number
 * @returns array of prime numbers
 */
const findPrime = (number) => {
    try {
        var primeData = [];
        for (let i = 1; i <= number; i++) {
            let flag = 0;
            // looping through 2 to user input number
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            // if number greater than 1 and not divisible by other numbers
            if (i > 1 && flag == 0) {
                primeData.push(i);
            }
        }
        return primeData;
    }
    catch (e) {
        logs_1.logsData.writeLogs({ service: 'findPrime', err: e, date: new Date() }); // please check debug.logs file for exceptions
        throw e;
    }
};
/**
 *
 * helps to find medians of prime numbers
 * @param arr = array of prime numbers
 * @returns array of median (if length of arr is even then return 2 numbers else return 1 number)
 */
const findMedian = (arr) => {
    try {
        const medianArr = [];
        const middle = Math.floor(arr.length / 2);
        if (arr.length % 2 === 0) {
            medianArr.push(arr[middle - 1]); // return first median number if length of array is even
        }
        medianArr.push(arr[middle]); // return exact/second median number
        return medianArr;
    }
    catch (e) {
        logs_1.logsData.writeLogs({ service: 'findMedian', err: e, date: new Date() }); // please check debug.logs file for exceptions
        throw e;
    }
};
exports.MedianService = new MedianServices();
