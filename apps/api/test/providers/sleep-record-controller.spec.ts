import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '../../src/config/ConfigService';
import { CreateSleepRecordDTO } from '../../src/sleepRecord/dto/sleep-record.dto';
import { SleepRecordController } from '../../src/sleepRecord/sleep-record.controller';
import { SleepRecordService } from '../../src/sleepRecord/sleep-record.service';
import { SLEEP_RECORDS } from './stub/sleep-records';

describe('SleepRecordController', () => {
  let controller: SleepRecordController;
  const mockSleepRecordService = {
    getAll: jest.fn().mockResolvedValue(SLEEP_RECORDS),
    getByName: jest.fn((name: string) => {
      const records = SLEEP_RECORDS.filter((record) => record.name === name);
      return Promise.resolve(records);
    }),
    create: jest.fn((sleepRecord: CreateSleepRecordDTO) => {
      const newRecord = { ...sleepRecord, _id: 'mockMongoId' };
      return Promise.resolve(newRecord);
    }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SleepRecordController],
      providers: [SleepRecordService, ConfigService],
    })
      .overrideProvider(SleepRecordService)
      .useValue(mockSleepRecordService)
      .compile();

    controller = app.get<SleepRecordController>(SleepRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create Sleep Record', () => {
    it('should return the newly created record', async () => {
      const newRecord = SLEEP_RECORDS[0];
      const result = await controller.createSleepRecord(newRecord);

      expect(mockSleepRecordService.create).toHaveBeenCalled();
      expect(result).toEqual(expect.objectContaining(newRecord));
      expect(result).toHaveProperty('_id');
    });

    it('should handle service errors', async () => {
      const validRecord = SLEEP_RECORDS[0];

      mockSleepRecordService.create.mockRejectedValueOnce(
        new InternalServerErrorException('Service error'),
      );

      try {
        await controller.createSleepRecord(validRecord);
      } catch (error) {
        expect(error).toBeInstanceOf(InternalServerErrorException);
        expect(error.message).toEqual('Service error');
      }

      expect(mockSleepRecordService.create).toHaveBeenCalledWith(validRecord);
    });
  });

  describe('Get Sleep Records by Name', () => {
    it('should return records for a given user name', async () => {
      const name = SLEEP_RECORDS[2].name;

      const result = await controller.getUserSleepRecords(name);
      const expectedResult = SLEEP_RECORDS.filter(
        (record) => record.name === name,
      );
      expect(mockSleepRecordService.getByName).toHaveBeenCalledWith(name);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('Get All Sleep Records', () => {
    it('should return all records', async () => {
      const result = await controller.getAllRecords();

      expect(mockSleepRecordService.getAll).toHaveBeenCalled();
      expect(result).toEqual(SLEEP_RECORDS);
    });
  });
});
