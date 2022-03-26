"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mongoose = require('mongoose');
require('dotenv').config();
class Database {
    constructor() {
        this._connect(); // call function to connect with database
    }
    _connect() {
        // connection function for mongoose
        mongoose.connect(`mongodb://${process.env.MONGOSERVER}/${process.env.DATABASE}`)
            .then(() => {
            console.log('Database connection successful');
        })
            .catch((err) => {
            console.error('Database connection error', err);
        });
    }
}
exports.default = Database;
