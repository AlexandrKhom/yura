import * as Joi from 'joi';

export const schemaValidConfig = Joi.object({
  // ACCESS_TOKEN_SECRET: Joi.string().required(),
  // SERVICE_PORT: Joi.number().default(3000),
  MONGODB_HOST: Joi.string().required(),
  // MONGO_DB: Joi.string().required(),
  // MONGO_HOST: Joi.string().required(),
  // MONGO_PASSWORD: Joi.string().required(),
  // MONGO_USER: Joi.string().required(),
  // REFRESH_TOKEN_SECRET: Joi.string().required(),
});
