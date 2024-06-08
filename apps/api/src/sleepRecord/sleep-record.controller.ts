import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSleepRecordDTO } from './dto/sleep-record.dto';
import { SleepRecordType } from './entity/sleep-record';
import { SleepRecordService } from './sleep-record.service';

@Controller('sleep-record')
export class SleepRecordController {
  constructor(private readonly sleepService: SleepRecordService) {}

  @Post()
  createSleepRecord(
    @Body() sleepRecord: CreateSleepRecordDTO,
  ): Promise<SleepRecordType> {
    return this.sleepService.create(sleepRecord);
  }

  @Get()
  getAllRecords(): Promise<any> {
    return this.sleepService.getAll();
  }

  @Get('user')
  getUserSleepRecords(@Query('name') name: string): Promise<SleepRecordType[]> {
    return this.sleepService.getByName(name);
  }
}
