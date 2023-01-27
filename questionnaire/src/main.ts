import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './interceptors/loggin.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const NAME = configService.get<string>('SERVICE_NAME');
  const MODE = configService.get<number>('SERVICE_MODE');
  const PORT = configService.get<number>('SERVICE_PORT');
  const HOST = configService.get<string>('SERVICE_HOST');
  const PROTOCOL = configService.get<number>('SERVICE_PROTOCOL');
  const GLOBAL_PREFIX = configService.get<string>('SERVICE_GLOBAL_PREFIX');
  const SWAGGER = configService.get<string>('SERVICE_SWAGGER');
  const swaggerUrl = `${GLOBAL_PREFIX}/${SWAGGER}`;

  // app.setGlobalPrefix(GLOBAL_PREFIX || 'main-api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.flushLogs();

  const config = new DocumentBuilder()
    .setTitle(`${NAME}`)
    .setDescription(`${NAME} service`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerUrl, app, document);

  await app.listen(PORT, () => {
    console.log(
      `microservice < ${NAME} > run on port ${PORT} with mode ${MODE}`,
    );
    // console.log(
    //   `Server has been started on ${PROTOCOL}://${HOST}${
    //     HOST === 'localhost' ? ':' + PORT : ''
    //   }/${GLOBAL_PREFIX}`,
    // );
    // console.log(
    //   `Open swagger: ${PROTOCOL}://${HOST}${
    //     HOST === 'localhost' ? ':' + PORT : ''
    //   }/${swaggerUrl}`,
    // );
  });
}
bootstrap();
