import { Logger, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigService } from 'src/config/customConfig';
import { SleepController } from './sleep.controller';
import { SleepService } from './sleep.service';

@Module({
  imports: [LoggerModule.forRoot()],
  controllers: [SleepController],
  providers: [SleepService, Logger, ConfigService],
})
export class SleepModule {}
