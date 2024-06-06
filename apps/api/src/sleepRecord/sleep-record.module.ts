import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from 'nestjs-pino';
import {
  SleepRecord,
  SleepRecordSchema,
} from 'src/providers/schemas/sleepRecord.schema';
import { ConfigService } from '../config/customConfig';
import { SleepController } from './sleep-record.controller';
import { SleepRecordService } from './sleep-record.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SleepRecord.name, schema: SleepRecordSchema },
    ]),
    LoggerModule.forRoot(),
  ],
  controllers: [SleepController],
  providers: [SleepRecordService, ConfigService, Logger],
})
export class SleepRecordModule {}
