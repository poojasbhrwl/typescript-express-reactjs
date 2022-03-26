"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./src/config"));
require('dotenv').config();
const express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
const index_1 = __importDefault(require("./src/index"));
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT ? process.env.PORT : 4000;
        this.db = new config_1.default();
        this.server(); // call function for server creation
        this.db; // call database class to connect with database 
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        // create swagger documentation link
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        // call main routes given in src folder
        this.app.use("/", index_1.default);
    }
    server() {
        // create server with port given in .env file or 4000
        this.app.listen(this.port, () => {
            console.log(`Server Running here 👉 https://localhost:${this.port}`);
        });
    }
}
new App();
