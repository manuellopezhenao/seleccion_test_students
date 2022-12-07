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
exports.ValidaSchema = void 0;
const ValidaSchema = (req, res, next, schema) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({
                susses: false,
                mgs: error.details[0].message,
            });
            return;
        }
        next();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            mgs: 'Internal server error',
        });
    }
});
exports.ValidaSchema = ValidaSchema;
//# sourceMappingURL=validate_result.js.map