"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidConfig = void 0;
const Joi = require("joi");
exports.schemaValidConfig = Joi.object({
    MONGODB_HOST: Joi.string().required(),
});
//# sourceMappingURL=schema.config.js.map