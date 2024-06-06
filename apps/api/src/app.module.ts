import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'nestjs-pino';
import { validate } from './config/validation';
import { SleepRecordModule } from './sleepRecord/sleep-record.module';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: ['.env'],
    }),
    MongooseModule.forRoot(`mongodb://localhost:27017/sleep-tracker`),
    SleepRecordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
