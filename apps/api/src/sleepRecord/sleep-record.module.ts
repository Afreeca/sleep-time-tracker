import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SleepRecord,
  SleepRecordSchema,
} from '../providers/schemas/sleepRecord.schema';
import { SleepRecordController } from './sleep-record.controller';
import { SleepRecordService } from './sleep-record.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SleepRecord.name, schema: SleepRecordSchema },
    ]),
  ],
  controllers: [SleepRecordController],
  providers: [SleepRecordService],
})
export class SleepRecordModule {}
