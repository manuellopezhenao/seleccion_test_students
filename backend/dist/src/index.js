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
const express = require("express");
const connection_1 = require("./db/connection");
const app = express();
//Routes
app.use(require('./routes/courses'));
app.use(require('./routes/students'));
app.use(require('./routes/coursestudents'));
//Connection DATABASE
dbConnection();
function dbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection_1.sequelize.authenticate();
            console.log("Connection has been established successfully.");
        }
        catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    });
}
//Listen Server
app.listen(3001, () => {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=index.js.map