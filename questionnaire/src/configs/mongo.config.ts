import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
  };
};

const getMongoString = (configService: ConfigService) => {
  // const dbName = configService.get('MONGODB_INITDB_DATABASE');
  // const dbPort = configService.get('MONGODB_PORT');
  // const dbHost = configService.get('MONGODB_HOST');
  // const dbUser = configService.get('APP_MONGODB_ADMINUSERNAME');
  // const dbPwd = configService.get('APP_MONGODB_ADMINPASSWORD');

  const MONGO_URI = configService.get('MONGO_URI');

  console.log('MONGO_URI = ', MONGO_URI);
  return MONGO_URI;
};

