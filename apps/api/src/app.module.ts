import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './providers/mongo.module';
import { SleepRecordModule } from './sleepRecord/sleep-record.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    MongoModule,
    SleepRecordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
