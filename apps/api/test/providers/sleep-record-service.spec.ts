import { BadRequestException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateSleepRecordDTO } from 'src/sleepRecord/dto/sleep-record.dto';
import { SleepRecord } from '../../src/providers/schemas/sleepRecord.schema';
import { SleepRecordService } from '../../src/sleepRecord/sleep-record.service';
import { SLEEP_RECORDS } from './stub/sleep-records';

describe('SleepRecordService', () => {
  let service: SleepRecordService;

  const mockSleepRecordModel = {
    find: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SleepRecordService,
        {
          provide: getModelToken(SleepRecord.name),
          useValue: mockSleepRecordModel,
        },
      ],
    }).compile();

    service = module.get<SleepRecordService>(SleepRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a sleep record', async () => {
      const sleepRecordDto: CreateSleepRecordDTO = SLEEP_RECORDS[0];

      const mockSaveResult = {
        _id: 'mockMongoId',
        ...sleepRecordDto,
      };

      mockSleepRecordModel.create.mockResolvedValueOnce(mockSaveResult);

      const result = await service.create(sleepRecordDto);

      expect(result).toEqual(mockSaveResult);
      expect(mockSleepRecordModel.create).toHaveBeenCalledWith(sleepRecordDto);
    });
  });

  describe('getByName', () => {
    it('should return sleep records for a given user name', async () => {
      const name = SLEEP_RECORDS[0].name;
      const mockSleepRecords = SLEEP_RECORDS.slice(0, 7);

      mockSleepRecordModel.find.mockResolvedValueOnce(mockSleepRecords);

      const result = await service.getByName(name);

      expect(result).toEqual(mockSleepRecords);
      expect(mockSleepRecordModel.find).toHaveBeenCalledWith({
        name: { $regex: new RegExp(name, 'i') },
      });
    });

    it('should throw BadRequestException if name is not provided', async () => {
      await expect(service.getByName(null)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('getAll', () => {
    it('should return all sleep records', async () => {
      const mockSleepRecords = SLEEP_RECORDS;

      mockSleepRecordModel.find.mockResolvedValueOnce(mockSleepRecords);

      const result = await service.getAll();

      expect(result).toEqual(mockSleepRecords);
      expect(mockSleepRecordModel.find).toHaveBeenCalledWith();
    });
  });
});
