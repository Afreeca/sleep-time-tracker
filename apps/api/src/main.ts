import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { ConfigService } from './config/customConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('api');

  const logger = app.get(Logger);
  const configService = app.get(ConfigService);
  const appName = configService.getAppName;
  const env = configService.getEnvironment;
  const port = configService.getAppPort || 3000;

  logger.log({ msg: 'Server started', port, appName, env });
  await app.listen(port);
}
bootstrap();
