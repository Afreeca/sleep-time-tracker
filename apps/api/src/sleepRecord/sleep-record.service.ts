import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SleepRecord,
  SleepRecordDocument,
} from '../../src/providers/schemas/sleepRecord.schema';
import { CreateSleepRecordDTO } from './dto/sleep-record.dto';
import { SleepRecordType } from './entity/sleep-record';

@Injectable()
export class SleepRecordService {
  private readonly logger: Logger;
  constructor(
    @InjectModel(SleepRecord.name)
    private sleepRecordModel: Model<SleepRecordDocument>,
  ) {
    this.logger = new Logger(SleepRecordService.name);
  }

  async create(sleepRecord: CreateSleepRecordDTO): Promise<SleepRecordType> {
    return await this.sleepRecordModel.create(sleepRecord);
  }

  async getByName(name: string): Promise<SleepRecordType[]> {
    if (!name) {
      throw new BadRequestException('Name parameter is required');
    }
    const caseInsensitiveQuery = { name: { $regex: new RegExp(name, 'i') } };
    return await this.sleepRecordModel.find(caseInsensitiveQuery);
  }

  async getAll(): Promise<SleepRecordType[]> {
    return await this.sleepRecordModel.find();
  }
}
