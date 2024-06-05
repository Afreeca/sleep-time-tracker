import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { validate } from './config/validation';
import { SleepController } from './sleep/sleep.controller';
import { SleepModule } from './sleep/sleep.module';
import { SleepService } from './sleep/sleep.service';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: ['.env'],
    }),
    SleepModule,
  ],
  controllers: [SleepController],
  providers: [SleepService],
})
export class AppModule {}
