"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => {
    return {
        uri: getMongoString(configService),
    };
};
exports.getMongoConfig = getMongoConfig;
const getMongoString = (configService) => {
    const MONGO_URI = configService.get('MONGO_URI');
    console.log('MONGO_URI = ', MONGO_URI);
    return MONGO_URI;
};
//# sourceMappingURL=mongo.config.js.map