"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const loggin_interceptor_1 = require("./interceptors/loggin.interceptor");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const NAME = configService.get('SERVICE_NAME');
    const MODE = configService.get('SERVICE_MODE');
    const PORT = configService.get('SERVICE_PORT');
    const HOST = configService.get('SERVICE_HOST');
    const PROTOCOL = configService.get('SERVICE_PROTOCOL');
    const GLOBAL_PREFIX = configService.get('SERVICE_GLOBAL_PREFIX');
    const SWAGGER = configService.get('SERVICE_SWAGGER');
    const swaggerUrl = `${GLOBAL_PREFIX}/${SWAGGER}`;
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.enableCors();
    app.useGlobalInterceptors(new loggin_interceptor_1.LoggingInterceptor());
    app.flushLogs();
    const config = new swagger_1.DocumentBuilder()
        .setTitle(`${NAME}`)
        .setDescription(`${NAME} service`)
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(swaggerUrl, app, document);
    await app.listen(PORT, () => {
        console.log(`microservice < ${NAME} > run on port ${PORT} with mode ${MODE}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map