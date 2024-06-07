import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('api');

  const configService = process.env;
  const appName = configService.APP_NAME;
  const port = configService.APP_PORT || 5000;

  console.log({ msg: 'Server started', port, appName });
  await app.listen(port);
}
bootstrap();
