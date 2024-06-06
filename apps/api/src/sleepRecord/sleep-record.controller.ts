import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSleepRecordDTO } from './dto/sleep-record.dto';
import { SleepRecordService } from './sleep-record.service';

@Controller('sleep-record')
export class SleepController {
  constructor(private readonly sleepService: SleepRecordService) {}

  @Post()
  createSleepRecord(@Body() sleepRecord: CreateSleepRecordDTO): Promise<any> {
    return this.sleepService.create(sleepRecord);
  }

  @Get()
  getAllRecords(): Promise<any> {
    return this.sleepService.getAll();
  }

  @Get('user')
  getUserSleepRecords(@Query('name') name: string): Promise<any> {
    return this.sleepService.getByName({ name });
  }
}
