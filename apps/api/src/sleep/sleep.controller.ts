import { Controller, Get, Query } from '@nestjs/common';
import { SleepService } from './sleep.service';

@Controller('sleep/')
export class SleepController {
  constructor(private readonly sleepService: SleepService) {}

  @Get('records')
  getSleepRecords(@Query('userId') userId: string): Promise<any> {
    return this.sleepService.getUserSleepRecords({ userId });
  }
}
